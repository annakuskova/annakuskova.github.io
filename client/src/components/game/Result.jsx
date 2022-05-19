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
        Вы набрали <span>4</span> очкa
      </div>
    </div>
  );
};

export default Result;
