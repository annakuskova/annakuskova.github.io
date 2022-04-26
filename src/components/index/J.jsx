import React from "react";
import "./Content.css";
import ImgJ from "../../images/I.JPG";

const J = () => {
    return <div className="content">
    <div className="sign">
      <img src={ImgJ} alt="J"></img>
    </div>
    <div className="description">the little finger is straight,
     the rest of the fingers are pressed against the palm with the thumb,
      movement from bottom to top.</div>
  </div>;
}

export default J;