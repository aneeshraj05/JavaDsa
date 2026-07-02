import React from "react";
import cr from "./cr.png";
import "./cr.css";
import "../../index.css";

const Cr = () => {
  return (
    <div className="cr-container flip-item">
      <div className="cr-wrapper">
        {/* The Dedicated Light Element */}
        <div className="cr-light-beam" />
        
        {/* The Main Transparent Lamp Asset Image */}
        <img
          src={cr}
          alt="Lamp"
          className="cr-image"
        />
      </div>
    </div>
  );
};

export default Cr;