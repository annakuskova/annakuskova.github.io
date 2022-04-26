import React from "react";
import "./Content.css";
import ImgB from "../../images/B.JPG";

const B = () => {
  return <div className="content">
    <div className="sign">
      <img src={ImgB} alt="A"></img>
    </div>
    <div className="description">palm open, all fingers extended.</div>
  </div>;
};

export default B;
