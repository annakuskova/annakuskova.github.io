import React from "react";
import "./Content.css";
import ImgS from "../../images/S.JPG";

const S = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgS} alt="S"></img>
    </div>
    <div className="description">the fingers are gathered into a fist,
     the thumb lies above the rest.</div>
  </div>;
}

export default S;