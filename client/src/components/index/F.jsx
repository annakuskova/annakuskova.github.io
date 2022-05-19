import React from "react";
import "./Content.css";
import ImgF from "../../images/F.JPG";


const F = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgF} alt="A"></img>
    </div>
    <div className="description">the index finger and thumb are connected to form a ring,
     the other straight fingers are spread apart.</div>
  </div>;
}

export default F;