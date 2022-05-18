import React from "react";
import "./Content.css";

const J_p = () => {
  return (
    <div className="main_content">
      <div className="camera" id="cam_elem">
        <video id="video"></video>
      </div>
      <canvas id="canvas"></canvas>
      <input type="hidden" name="letter" id="letter" value="j" />
    </div>
  );
};

export default J_p;
