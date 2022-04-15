import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";



const Description = () => {
  return (
    <div className="main">

      <div className="main_content">
        <div className="itsgame">
          <div className="description_game">Hey. It's game</div>
        </div>
      </div>

      <div className="nav_panel_game">
        <div className="nav_btn_go">
          <Link to="/game/go">GO!</Link>
        </div>
      </div>

    </div>
  );
};

export default Description;
