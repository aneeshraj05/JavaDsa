import { useEffect, useRef } from "react";
import "./splash.css";

export default function SplashEffect({ color = "#000000" }) {
  const splashRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      const splash = splashRef.current;
      if (!splash) return;

      splash.style.left = `${e.pageX - 15}px`;
      splash.style.top = `${e.pageY - 15}px`;

      const lines = splash.querySelectorAll("line");

      lines.forEach((line, i) => {
        line.animate(
          [
            {
              strokeDashoffset: 90,
              transform: `rotate(${i * 45}deg) translateY(15px)`,
            },
            {
              strokeDashoffset: 30,
              transform: `rotate(${i * 45}deg) translateY(0px)`,
            },
          ],
          {
            duration: 660,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            fill: "forwards",
          }
        );
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={splashRef}
      className="splash-effect"
      style={{ "--splash-color": color }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 100 100"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        stroke="var(--splash-color)"
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <line
            key={index}
            x1="50"
            y1="30"
            x2="50"
            y2="4"
            strokeDasharray="30"
            strokeDashoffset="30"
            style={{
              transformOrigin: "center",
            }}
          />
        ))}
      </svg>
    </div>
  );
}