import React from "react";
import "./Content.css";
import ImgW from "../../images/W.JPG";

const W = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgW} alt="W"></img>
    </div>
    <div className="description">the little finger and thumb are pressed against the palm, 
    the rest are straightened and separated.</div>
  </div>;
}

export default W;