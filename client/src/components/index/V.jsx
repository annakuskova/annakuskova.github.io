import React from "react";
import "./Content.css";
import ImgV from "../../images/J.JPG";

const V = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgV} alt="A"></img>
    </div>
    <div className="description">the little finger is straight,
     the other fingers are pressed against the palm with the thumb.</div>
  </div>;
}

export default V;