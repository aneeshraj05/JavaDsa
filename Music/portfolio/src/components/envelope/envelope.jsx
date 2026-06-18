import React from "react";
import envelopeImg from "./envelope.png";
import "./envelope.css";
import "../../index.css";
import { useRef } from "react";
import enve from './envelope.mp3';

const Envelope = ({ audioUnlocked }) => {
  const audioRef = useRef(null);

  return (
    <div className="envelope-container flip-item" data-tooltip="Click me">
      <img
        src={envelopeImg}
        alt="Envelope"
        className="envelope-image"
        onMouseEnter={() => {
          if (audioUnlocked && audioRef.current) {
            audioRef.current.volume = 0.1;
            audioRef.current.currentTime = 0;
            audioRef.current
              .play()
              .then(() => {
                console.log("Playing");
              })
              .catch((err) => {
                console.error(err);
              });
          }
        }}
      />
      <audio src={enve} ref={audioRef}></audio>
    </div>
  );
};

export default Envelope;