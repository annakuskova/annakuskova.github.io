import React from "react";
import "./Content.css";
import ImgL from "../../images/L.JPG";

const L = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgL} alt="L"></img>
    </div>
    <div className="description">the thumb and index finger form a right angle,
     the rest are pressed against the palm.</div>
  </div>;
}

export default L;