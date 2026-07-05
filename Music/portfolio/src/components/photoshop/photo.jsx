import React from "react";
import photo from "./photo.png";
import "./photo.css";
import photm from "./photo.mp3";
import "../../index.css";
const Photo = ({ audioUnlocked }) => {
  const audioref = React.useRef(null);

  return (
    <div
      className="photo-container flip-item"
      onMouseEnter={() => {
        if (audioUnlocked) {
          audioref.current.play();
          audioref.current.volume = 0.1;
        } else {
          audioref.current.pause();
        }
      }}
    >
      <audio src={photm} ref={audioref} />
      <img src={photo} alt="Photo" className="photo-image" />
    </div>
  );
};

export default Photo;
