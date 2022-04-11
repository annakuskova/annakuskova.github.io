import React from "react";
import './Content.css';

const Content = () => {
  return (
    <div className="main_content">
      <div className="sign">
        <span>photo</span>
      </div>
      <div className="description">
        description of the gesture for the selected letter
      </div>
    </div>
  );
};

export default Content