import React from "react";
import "./Content.css";
import ImgO from "../../images/O.JPG";

const O = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgO} alt="O"></img>
    </div>
    <div className="description">all fingers are connected by pads (pinch).</div>
  </div>;
}

export default O;