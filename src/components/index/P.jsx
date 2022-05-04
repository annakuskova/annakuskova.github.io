import React from "react";
import "./Content.css";
import ImgP from "../../images/P.JPG";

const P = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgP} alt="P"></img>
    </div>
    <div className="description">the straight index and middle fingers are separated, 
    the rest are pressed against the palm with the thumb and directed downward.</div>
  </div>;
}

export default P;