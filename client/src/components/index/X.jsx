import React from "react";
import "./Content.css";
import ImgX from "../../images/X.JPG";

const X = () => {
  return (
    <div className="content">
      <div className="sign">
        <img src={ImgX} alt="X"></img>
      </div>
      <div className="description">
        index finger is bent, the rest are gathered to the palm.
      </div>
    </div>
  );
};

export default X;
