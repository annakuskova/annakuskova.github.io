import React from "react";
import "./Content.css";
import ImgC from "../../images/C.JPG";


const C = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgC} alt="A"></img>
    </div>
    <div className="description">all fingers are pressed against each other, half-bent, forming a half-ring.</div>
  </div>;
}

export default C;