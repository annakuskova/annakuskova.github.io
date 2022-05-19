import React from "react";
import "./Content.css";
import ImgZ from "../../images/Z.JPG";

const Z = () => {
  return (
    <div className="content">
      <div className="sign">
        <img src={ImgZ} alt="Z"></img>
      </div>
      <div className="description">
        index finger pointing up, the rest pressed to the palm.
      </div>
    </div>
  );
};

export default Z;
