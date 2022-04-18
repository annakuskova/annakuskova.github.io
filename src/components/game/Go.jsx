import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Arrow.png";

const Go = () => {
  return (
    <div className="main">
      <div className="nav_btn_back">
        <a href="/game">
          <img src={arrow} alt="arrow"></img>
        </a>
      </div>
      <div className="game">
        <div className="time">5:00</div>
        <div className="camera">camera</div>

        <div className="score">5/10</div>
      </div>
    </div>
  );
};

export default Go;
