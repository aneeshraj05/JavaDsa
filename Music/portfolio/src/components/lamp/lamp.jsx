import React from "react";
import lamp from "./lamp.png";
import "./lamp.css";
import "../../index.css";

const Lamp = () => {
  return (
    <div className="lamp-container flip-item">
      <div className="lamp-wrapper">
        {/* The Dedicated Light Element */}
        <div className="lamp-light-beam" />
        
        {/* The Main Transparent Lamp Asset Image */}
        <img
          src={lamp}
          alt="Lamp"
          className="lamp-image"
        />
      </div>
    </div>
  );
};

export default Lamp;