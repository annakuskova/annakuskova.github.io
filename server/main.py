import asyncio
import logging
import websockets
from websockets import WebSocketServerProtocol
from PIL import Image   
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
import cv2
import mediapipe as mp
import time
import os
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
import io
import numpy as np
import base64

logging.basicConfig(level=logging.INFO)

actions = np.array(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'y', 'z'])
no_sequences = 100
sequence_length = 30

model = Sequential()

mpHolistic = mp.solutions.holistic
mpDrawing = mp.solutions.drawing_utils

def mediapipeDetection(image_param, model):
    image = cv2.cvtColor(image_param, cv2.COLOR_BGR2RGB)
    image.flags.writeable = False
    results = model.process(image)
    image.flags.writeable = True
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    return image, results


def drawLandmarks(image, results):
    mpDrawing.draw_landmarks(image, results.left_hand_landmarks, mpHolistic.HAND_CONNECTIONS,
                             mpDrawing.DrawingSpec(color=(80, 22, 10), thickness=2, circle_radius=4),
                             mpDrawing.DrawingSpec(color=(80, 44, 121), thickness=2, circle_radius=2))
    mpDrawing.draw_landmarks(image, results.right_hand_landmarks, mpHolistic.HAND_CONNECTIONS,
                             mpDrawing.DrawingSpec(color=(121, 22, 76), thickness=2, circle_radius=4),
                             mpDrawing.DrawingSpec(color=(121, 44, 250), thickness=2, circle_radius=2))

def extractKeypoints(results):
    lh = np.array([[res.x, res.y, res.z] for res in results.left_hand_landmarks.landmark]).flatten() if results.left_hand_landmarks else np.zeros(21*3)
    rh = np.array([[res.x, res.y, res.z] for res in results.right_hand_landmarks.landmark]).flatten() if results.right_hand_landmarks else np.zeros(21*3)
    return np.concatenate([lh, rh])

async def recognize(frame, sequence, sentence, predictions, threshold):
    with mpHolistic.Holistic(min_detection_confidence=0.5, min_tracking_confidence=0.5) as holistic:
        image, results = mediapipeDetection(frame, holistic)

        drawLandmarks(image, results)
        cv2.imshow("window", image)
        cv2.waitKey(1)
        keypoints = extractKeypoints(results)

        sequence.append(keypoints)
        sequence = sequence[-30:]
        if len(sequence) == 30:
            res = model.predict(tf.expand_dims(sequence, axis=0))[0]
            predictions.append(np.argmax(res))
            if np.unique(predictions[-10:])[0] == np.argmax(res):
                if (max(res) >= threshold):
                    if len(sentence) > 0:
                        if actions[np.argmax(res)] != sentence[-1]:
                            sentence.append(actions[np.argmax(res)])
                    else:
                        sentence.append(actions[np.argmax(res)])

                    return actions[np.argmax(res)]

async def ws_handler(ws: WebSocketServerProtocol, uri: str) -> None:
    sequence = []
    sentence = []
    predictions = []
    threshold = 0.2
    async for message in ws:
        img_data = message.partition('base64,')[2]
        binary = base64.b64decode(img_data)
        x = np.frombuffer(binary, dtype='uint8')
        img = cv2.imdecode(x, cv2.IMREAD_UNCHANGED)
        letter = await recognize(img, sequence, sentence, predictions, threshold)
        print('0' if letter==None else letter)
        await ws.send('0' if letter==None else letter)
    #message = await ws.recv()
    #img_data = message.partition('base64,')[2]
    #binary = base64.b64decode(img_data)
    #x = np.frombuffer(binary, dtype='uint8')
    #img = cv2.imdecode(x, cv2.IMREAD_UNCHANGED)
    #letter = await recognize(img, sequence, sentence, predictions, threshold)
    #print('0' if letter==None else letter)
    #await ws.send('0' if letter==None else letter)


if __name__ == '__main__':
    model.add(LSTM(64, return_sequences=True, activation='relu', input_shape=(30, 126)))
    model.add(LSTM(128, return_sequences=True, activation='relu'))
    model.add(LSTM(64, return_sequences=False, activation='relu'))
    model.add(Dense(64, activation='relu'))
    model.add(Dense(32, activation='relu'))
    model.add(Dense(actions.shape[0], activation='softmax'))
    model.load_weights('action.h5')

    start_server = websockets.serve(ws_handler, 'localhost', 8080)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(start_server)
    loop.run_forever()
