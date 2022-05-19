import React from "react";
import "./Content.css";
import ImgH from "../../images/H.JPG";

const H = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgH} alt="A"></img>
    </div>
    <div className="description">the index and middle fingers are stretched out in a horizontal position,
     the rest are pressed against the palm.</div>
  </div>;
}

export default H;