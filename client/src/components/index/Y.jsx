import React from "react";
import "./Content.css";
import ImgY from "../../images/Y.JPG";

const Y = () => {
  return (
    <div className="content">
      <div className="sign">
        <img src={ImgY} alt="Y"></img>
      </div>
      <div className="description">
        thumb and little finger are straight, the rest are pressed to the palm.
      </div>
    </div>
  );
};

export default Y;
