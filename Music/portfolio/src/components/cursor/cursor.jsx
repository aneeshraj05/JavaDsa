import React from "react";
import cursor from "./cursor.png";
import "./cursor.css";
import cmp  from './cursor.mp3'
import "../../index.css";

const Cursor = ({ audioUnlocked }) => {

  const audioRef = React.useRef(null);

  
  return (
    <div className="cursor-container flip-item" onMouseEnter={()=>{
          if(audioUnlocked){
            audioRef.current.play()
          }
          else{
            audioRef.current.pause()
          }
        }}>
      <div className="cursor-wrapper">
        <div className="cursor-light-beam" />
        <audio src={cmp}  ref={audioRef}  />
        <img
          src={cursor}
          alt="Cursor"
          className="cursor-image"
        />
      </div>
    </div>
  );
};

export default Cursor;