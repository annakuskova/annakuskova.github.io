import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";

const Description = () => {
    return <div className="description">
        Hey. It's game.
        <div className="nav_btn_go">
            <Link to="/game/go">GO!</Link>
        </div>
    </div>
}

export default Description;