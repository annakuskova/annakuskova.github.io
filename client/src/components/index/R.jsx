import React from "react";
import "./Content.css";
import ImgR from "../../images/R.JPG";

const R = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgR} alt="R"></img>
    </div>
    <div className="description">the index and middle fingers are crossed,
     the rest are pressed against the palm with the thumb.</div>
  </div>;
}

export default R;