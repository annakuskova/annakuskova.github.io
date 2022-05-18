import React from "react";
import "./Content.css";

const S_p = () => {
  return (
    <div className="main_content">
      <div className="camera" id="cam_elem">
        <video id="video"></video>
      </div>
      <canvas id="canvas"></canvas>
      <input type="hidden" name="letter" id="letter" value="s" />
    </div>
  );
};

export default S_p;
