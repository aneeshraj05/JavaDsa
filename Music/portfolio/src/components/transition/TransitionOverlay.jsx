import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./transition.css";

export default function TransitionOverlay({ trigger, onComplete }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    const paths = svgRef.current.querySelectorAll("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    const tl = gsap.timeline({
      onComplete,
    });

    paths.forEach((path) => {
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          strokeWidth: 700,
          duration: 0.8,
          ease: "power1.inOut",
        },
        0
      );
    });
  }, [trigger, onComplete]);

  return (
    <div className="transition-svg">
      <svg
        ref={svgRef}
        viewBox="0 0 2453 2535"
        preserveAspectRatio="none"
      >
        <path
          d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26..."
          stroke="#111"
          strokeWidth="200"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78..."
          stroke="#111"
          strokeWidth="200"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}