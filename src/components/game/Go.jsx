import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Arrow.png";
import Countdown from "./script";
import Time from "./script";

const Go = () => {
  return (
    <div className="main">
      <div className="nav_btn_back">
        <a href="/game">
          <img src={arrow} alt="arrow"></img>
        </a>
      </div>
      <div className="game">
        <p id="time"></p>
        {/* <script src="script.js"></script> */}
        {/* <Countdown /> */}
        {/* <Time /> */}
        {/* <div className="time">5:00</div> */}
        <div className="camera">camera</div>

        <div className="score">5/10</div>
      </div>
    </div>
  );
};

export default Go;
