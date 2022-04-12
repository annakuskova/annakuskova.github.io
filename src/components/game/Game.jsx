import React from "react";
import '../Navbar.css';
import './Content.css';

const Game = () => {
    return <div className="main">
    <div className="game">
        <div className="time">5:00</div>
        <div className="camera">camera</div>
        <div className="score">5/10</div>
    </div>
    <div className="nav_panel">
        <div className="nav_btn">
            <a href="/practice">practice</a>
        </div>
        <div className="nav_btn">
            <a href="/">education</a>
        </div>
    </div>
</div>
}

export default Game