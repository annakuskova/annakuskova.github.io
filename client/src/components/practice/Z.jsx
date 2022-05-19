import React from "react";
import "./Content.css";

const Z_p = () => {
  return (
    <div className="main_content">
      <div className="camera" id="cam_elem">
        <video id="video"></video>
      </div>
      <canvas id="canvas"></canvas>
      <input type="hidden" name="letter" id="letter" value="z" />
    </div>
  );
};

export default Z_p;
