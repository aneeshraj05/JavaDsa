import React, { useRef } from "react";
import cr from "./cr.png";
import "./cr.css";
import cmr from "./cr.mp3";
import "../../index.css";

const Cr = ({ audioUnlocked }) => {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (!audioRef.current) return;

    if (audioUnlocked) {
      audioRef.current.currentTime = 1;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div
      className="cr-container flip-item"
      onMouseEnter={handleMouseEnter}
    >
      <div className="cr-wrapper">
        <div className="cr-light-beam" />

        <img
          src={cr}
          alt="Lamp"
          className="cr-image"
        />
      </div>

      <audio ref={audioRef} src={cmr} />
    </div>
  );
};

export default Cr;