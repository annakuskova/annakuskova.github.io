import React from "react";
import arrow from "../../Arrow.png";
import "./Content.css";

const Result = () => {
  return (
    <div className="main">
      <div className="nav_btn_back">
        <a href="/game">
          <img src={arrow} alt="arrow"></img>
        </a>
      </div>
      <div className="game"></div>
      <div className="texttt">
        Вы набрали <span>5</span> очков
      </div>
    </div>
  );
};

export default Result;
