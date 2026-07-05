import React, { useRef } from "react";
import lamp from "./quotes.png";
import "./quotes.css";
import "../../index.css";
import pap from "./paper.mp3";

const Quotes = ({ audioUnlocked }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioUnlocked && audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.currentTime = 1.6;
      audioRef.current
        .play()
        .then(() => {
          console.log("Playing paper sound");
        })
        .catch((err) => {
          console.error("Audio play error:", err);
        });
    }
  };

  return (
    <div className="quotes-container flip-item">
      <img
        src={lamp}
        alt="Quotes"
        className="quotes-image"
        onMouseEnter={playAudio}
        onTouchStart={playAudio}
        onClick={playAudio} // Added for better compatibility
      />
      <audio src={pap} ref={audioRef} />
    </div>
  );
};

export default Quotes;