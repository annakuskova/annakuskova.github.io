import React from "react";
import "./Content.css";
import ImgA from "../../images/A.JPG";

const A = () => {
  return (
    <div className="content">
      <div className="sign">
        <img src={ImgA} alt="A"></img>
      </div>
      <div className="description">
        fingers are gathered into a fist, the thumb looks up, pressed against
        the bent index.
      </div>
    </div>
  );
};

export default A;
