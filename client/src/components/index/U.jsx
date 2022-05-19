import React from "react";
import "./Content.css";
import ImgU from "../../images/U.JPG";

const U = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgU} alt="U"></img>
    </div>
    <div className="description">the straight index and middle fingers are connected,
     the rest are pressed with the thumb to the palm.</div>
  </div>;
}

export default U;