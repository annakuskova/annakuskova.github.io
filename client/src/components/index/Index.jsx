import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import "../Header.css";
import "./Content.css";

const setActive = ({ isActive }) => (isActive ? "active_link" : "not_active");

const Index = () => {
  return (
    <div className="letters">
      <div className="topline">
        <NavLink to="/" className={setActive}>A</NavLink>
        <NavLink to="/B" className={setActive}>B</NavLink>
        <NavLink to="/C" className={setActive}>C</NavLink>
        <NavLink to="/D" className={setActive}>D</NavLink>
        <NavLink to="/E" className={setActive}>E</NavLink>
        <NavLink to="/F" className={setActive}>F</NavLink>
        <NavLink to="/G" className={setActive}>G</NavLink>
        <NavLink to="/H" className={setActive}>H</NavLink>
        <NavLink to="/I" className={setActive}>I</NavLink>
        <NavLink to="/J" className={setActive}>J</NavLink>
      </div> 
      <div className="midline">
        <NavLink to="/K" className={setActive}>K</NavLink>
        <NavLink to="/L" className={setActive}>L</NavLink>
        <NavLink to="/M" className={setActive}>M</NavLink>
        <NavLink to="/N" className={setActive}>N</NavLink>
        <NavLink to="/O" className={setActive}>O</NavLink>
        <NavLink to="/P" className={setActive}>P</NavLink>
        <NavLink to="/Q" className={setActive}>Q</NavLink>
        <NavLink to="/R" className={setActive}>R</NavLink>
        <NavLink to="/S" className={setActive}>S</NavLink>
      </div>
      <div className="botline">
        <NavLink to="/T" className={setActive}>T</NavLink>
        <NavLink to="/U" className={setActive}>U</NavLink>
        <NavLink to="/V" className={setActive}>V</NavLink>
        <NavLink to="/W" className={setActive}>W</NavLink>
        <NavLink to="/X" className={setActive}>X</NavLink>
        <NavLink to="/Y" className={setActive}>Y</NavLink>
        <NavLink to="/Z" className={setActive}>Z</NavLink>
      </div>
      <div className="main_content">

        <Outlet />

        {/* <div className="description">
          description of the gesture for the selected letter
        </div> */}
      </div>
      <div className="nav_panel">
        <div className="nav_btn">
          <Link to="/practice/">practice</Link>
        </div>
        <div className="nav_btn">
          <Link to="/game">game</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;


/* <div className="letter">
          <a href="/" className={setActive} >A</a>
        </div> */
        /* <div className="letter">
          <a href="/B">B</a>
        </div>
        <div className="letter">
          <a href="/C">С</a>
        </div>
        <div className="letter">
          <a href="/D">D</a>
        </div>
        <div className="letter">
          <a href="/E">E</a>
        </div>
        <div className="letter">
          <a href="/F">F</a>
        </div>
        <div className="letter">
          <a href="/G">G</a>
        </div>
        <div className="letter">
          <a href="/H">H</a>
        </div>
        <div className="letter">
          <a href="/I">I</a>
        </div>
        <div className="letter">
          <a href="/J">J</a>
        </div>*/
