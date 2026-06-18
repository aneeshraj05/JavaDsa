import React from "react";
import notebookImg from "./note.png";
import "./Note.css";
import not from "./note.mp3"

const Note = ({audioUnlocked}) => {
  const audioRef = React.useRef(null);


  return (
    <div className="note-container flip-item" >
      <img
        src={notebookImg}
        alt="Notebook"
        className="notebook-image"
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
onMouseLeave={()=>{
  if (audioUnlocked && audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }
}}
      />
      <audio src={not}  className="note-audio" ref={audioRef} preload="auto"  />
    </div>
  );
};

export default Note;