import "./music.css";
import { useRef, useState, useEffect } from "react";
import song from "./mouse.mp3";
import "../../index.css";

export default function MusicPlayer({ audioUnlocked, className }) {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const loadMetadata = () => setDuration(audio.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loadMetadata);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loadMetadata);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const handleMouseEnter = () => {
    if (audioUnlocked && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.1;
      audioRef.current
        .play()
        .catch((err) => console.log("Playback blocked:", err));
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    audioRef.current.currentTime = percentage * duration;
  };

  return (
    <div
      className={`music-player flip-item ${isPlaying ? "playing" : ""} ${className || ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`vinyl ${isPlaying ? "spinning" : "paused"}`}>
        <div className="label"></div>
      </div>

      <audio ref={audioRef} src={song} preload="metadata" />

      <div className="player-status-icon">
        <div className="beat-bar"></div>
        <div className="beat-bar"></div>
        <div className="beat-bar"></div>
        <div className="beat-bar"></div>
      </div>

      <div className="player-info">
        <div className="song-details">
          <p className="artist-name">Mouse</p>
          <h3 className="track-title">Blood Stake </h3>
        </div>

        <div className="progress-container">
          <div
            className="progress-line"
            ref={progressBarRef}  
            onClick={handleProgressClick}
          >
            <div
              className="progress-dot"
              style={{
                left: `${(currentTime / duration) * 100 || 0}%`,
              }}
            />
          </div>

          <div className="time">
            <span>{formatTime(currentTime)}</span>
            <span className="divider">/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
