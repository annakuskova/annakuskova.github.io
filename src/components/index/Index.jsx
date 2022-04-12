import React from "react";
import "../Header.css";
import "./Content.css";

const Index = () => {
  return (
    <div className="letters">
      <div className="topline">
        <div className="letter_active">A</div>
        <div className="letter">B</div>
        <div className="letter">C</div>
        <div className="letter">D</div>
        <div className="letter">E</div>
        <div className="letter">F</div>
        <div className="letter">G</div>
        <div className="letter">H</div>
        <div className="letter">I</div>
        <div className="letter">J</div>
      </div>
      <div className="midline">
        <div className="letter">K</div>
        <div className="letter">L</div>
        <div className="letter">M</div>
        <div className="letter">N</div>
        <div className="letter">O</div>
        <div className="letter">P</div>
        <div className="letter">Q</div>
        <div className="letter">R</div>
        <div className="letter">S</div>
      </div>
      <div className="botline">
        <div className="letter">T</div>
        <div className="letter">U</div>
        <div className="letter">V</div>
        <div className="letter">W</div>
        <div className="letter">X</div>
        <div className="letter">Y</div>
        <div className="letter">Z</div>
      </div>
      <div className="main_content">
        <div className="sign">
          <span>photo</span>
        </div>
        <div className="description">
          description of the gesture for the selected letter
        </div>
      </div>
      <div className="nav_panel">
        <div className="nav_btn">
          <a href="/practice">practice</a>
        </div>
        <div className="nav_btn">
          <a href="/game">game</a>
        </div>
      </div>
    </div>
  );
};

export default Index