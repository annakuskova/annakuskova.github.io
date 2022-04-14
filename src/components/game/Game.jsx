import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Navbar.css";
import "./Content.css";

const Game = () => {
  return (
    <>
      <Outlet />
      
      <div className="nav_panel">
        <div className="nav_btn">
          <Link to="/practice">practice</Link>
        </div>
        <div className="nav_btn">
          <Link to="/">education</Link>
        </div>
      </div>
    </>
  );
};

export default Game;
