import React from "react";
import "./Content.css";

const K_p = () => {
  return (
    <div className="main_content">
      <div className="camera">
        <video id="video"></video>
      </div>
      <canvas id="canvas"></canvas>
      <img id="photo" alt="photo" />
    </div>
  );
};

export default K_p;
