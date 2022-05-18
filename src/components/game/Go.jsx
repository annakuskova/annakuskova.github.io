import React from "react";
import arrow from "../../Arrow.png";
import { GameLogic } from "./GameLogic";

const Go = () => {
  const { minute, sec, millisec } = GameLogic();
  return (
    <div className="main">
      <div className="nav_btn_back">
        <a href="/game">
          <img src={arrow} alt="arrow"></img>
        </a>
      </div>
      <div className="game">
        <p id="time"></p>

        <h1>
          <span className="time">{minute}</span>
          <span className="time"> : </span>
          <span className="time">{sec}</span>
          <span className="time"> : </span>
          <span className="time">{millisec}</span>
        </h1>
        <h1>
          <span id="letter">a</span>
        </h1>

        <div className="camera" id="cam_elem">
          <video id="video"></video>
        </div>
        <canvas id="canvas"></canvas>
        <div className="score" id="score">
          0
        </div>
      </div>
    </div>
  );
};

export default Go;
