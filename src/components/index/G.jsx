import React from "react";
import "./Content.css";
import ImgG from "../../images/G.JPG";

const G = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgG} alt="A"></img>
    </div>
    <div className="description">the index finger is extended in a horizontal position, the middle, ring and little finger are pressed against the palm, 
    the thumb is pressed against the second joint of the index finger.</div>
  </div>;
}

export default G;