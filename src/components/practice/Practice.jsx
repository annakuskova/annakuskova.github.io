import React from "react";
import "./Content.css";
import "../Header.css";
import { Link, Outlet, NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active_link" : "not_active");

const Practice = () => {
  return (
    <div className="letters">
      <div className="topline">
        <NavLink to="/practice" className={setActive}>A</NavLink>
        <NavLink to="/practice/B" className={setActive}>B</NavLink>
        <NavLink to="/practice/C" className={setActive}>C</NavLink>
        <NavLink to="/practice/D" className={setActive}>D</NavLink>
        <NavLink to="/practice/E" className={setActive}>E</NavLink>
        <NavLink to="/practice/F" className={setActive}>F</NavLink>
        <NavLink to="/practice/G" className={setActive}>G</NavLink>
        <NavLink to="/practice/H" className={setActive}>H</NavLink>
        <NavLink to="/practice/I" className={setActive}>I</NavLink>
        <NavLink to="/practice/J" className={setActive}>J</NavLink>
      </div> 
      <div className="midline">
        <NavLink to="/practice/K" className={setActive}>K</NavLink>
        <NavLink to="/practice/L" className={setActive}>L</NavLink>
        <NavLink to="/practice/M" className={setActive}>M</NavLink>
        <NavLink to="/practice/N" className={setActive}>N</NavLink>
        <NavLink to="/practice/O" className={setActive}>O</NavLink>
        <NavLink to="/practice/P" className={setActive}>P</NavLink>
        <NavLink to="/practice/Q" className={setActive}>Q</NavLink>
        <NavLink to="/practice/R" className={setActive}>R</NavLink>
        <NavLink to="/practice/S" className={setActive}>S</NavLink>
      </div>
      <div className="botline">
        <NavLink to="/practice/T" className={setActive}>T</NavLink>
        <NavLink to="/practice/U" className={setActive}>U</NavLink>
        <NavLink to="/practice/V" className={setActive}>V</NavLink>
        <NavLink to="/practice/W" className={setActive}>W</NavLink>
        <NavLink to="/practice/X" className={setActive}>X</NavLink>
        <NavLink to="/practice/Y" className={setActive}>Y</NavLink>
        <NavLink to="/practice/Z" className={setActive}>Z</NavLink>
      </div>

      <Outlet />

      
      <div className="nav_panel">
        <div className="nav_btn">
          <Link to="/">edication</Link>
        </div>
        <div className="nav_btn">
          <Link to="/game">game</Link>
        </div>
      </div>
    </div>
  );
};

export default Practice;
