import React from "react";
import "./Content.css";
import ImgD from "../../images/D.JPG";


const D = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgD} alt="A"></img>
    </div>
    <div className="description">the index finger is straightened,
     the rest are pressed against the palm.</div>
  </div>;
}

export default D;