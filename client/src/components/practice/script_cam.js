window.onload = function () {
  var video = document.getElementById("video");
  var canvas = document.getElementById("canvas");
  let socket = new WebSocket("ws://172.20.10.12:7777");
  var cam = document.getElementById("cam_elem");

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: "user", height: 240, width: 320 },
      })
      .then(function (stream) {
        video.srcObject = stream;
        video.play();
      });
  }

  const intervalId = setInterval(() => {
    canvas.width = 320;
    canvas.height = 240;
    var context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, 320, 240);

    var data = canvas.toDataURL("image/png");
    socket.send(data);
  }, 500);

  socket.onmessage = function (event) {
    let message = event.data;
    console.log(message);
    if (message === "a") {
      cam.classList.remove("wrong");
      cam.classList.add("right");
    } else {
      cam.classList.remove("right");
      cam.classList.add("wrong");
    }
  };
};
