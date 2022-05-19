import React from "react";
import "./Content.css";
import ImgQ from "../../images/P.JPG";

const Q = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgQ} alt="Q"></img>
    </div>
    <div className="description">у нас нет q.</div>
  </div>;
}

export default Q;