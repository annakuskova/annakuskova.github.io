import React from "react";
import "./Content.css";
import ImgT from "../../images/T.JPG";

const T = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgT} alt="T"></img>
    </div>
    <div className="description">the fingers are gathered into a fist, 
    the index finger wraps around the thumb.</div>
  </div>;
}

export default T;