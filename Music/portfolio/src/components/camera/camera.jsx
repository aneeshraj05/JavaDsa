import React from "react";
import cam from "./camera.png";
import "./camera.css";
import "../../index.css";
const Camera = () => {
  return (
    <div className="camera-container flip-item">
      <img
        src={cam}
        alt="Camera"
        className="camera-image"
      />
    </div>
  );
};

export default Camera;