import React from "react";
import "./Content.css";
import ImgN from "../../images/N.JPG";

const N = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgN} alt="N"></img>
    </div>
    <div className="description">the palm is open, the thumb, ring finger and little finger are attached and pressed to the palm, 
    the rest are half-bent.</div>
  </div>;
}

export default N;