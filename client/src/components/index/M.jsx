import React from "react";
import "./Content.css";
import ImgM from "../../images/M.JPG";

const M = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgM} alt="M"></img>
    </div>
    <div className="description">all fingers are gathered into a fist 
    and press the thumb to the palm.</div>
  </div>;
}

export default M;