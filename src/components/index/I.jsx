import React from "react";
import "./Content.css";
import ImgI from "../../images/I.JPG";

const I = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgI} alt="A"></img>
    </div>
    <div className="description">the little finger is straight, 
    the other fingers are pressed against the palm with the thumb.</div>
  </div>;
}

export default I;