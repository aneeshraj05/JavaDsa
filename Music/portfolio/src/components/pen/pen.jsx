import React from "react";
import penImg from "./pen.png";
import "./pen.css";
import pen from './pen.mp3'
import {useRef} from "react"
const Pen = ({audioUnlocked}) => {
  const audioRef=useRef(null);

  return (
    <div className="pen-container flip-item">
      <img
        src={penImg}
        alt="Pen"
        className="pen-image"
        onMouseEnter={()=>{
          if(audioUnlocked){
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
      <audio src={pen} ref={audioRef}></audio>
    </div>
  );
};

export default Pen;