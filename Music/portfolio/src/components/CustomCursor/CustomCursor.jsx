import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CustomCursor.css";

const CustomCursor = ({ active }) => {
  const youCursorRef = useRef(null);
  const aneeshCursorRef = useRef(null);
  const containerRef = useRef(null);

  // Track actual mouse position for collision calculation
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  // Track current GSAP-animated "You" cursor position
  const youPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // Static position of the Aneesh cursor (fixed in screen space)
  const aneeshPos = { x: window.innerWidth * 0.68, y: window.innerHeight * 0.45 };

  useEffect(() => {
    if (!active) return;

    // ---- Entrance animation ----
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.7)" }
    );

    // ---- GSAP quickTo for smooth trailing "You" cursor ----
    const xTo = gsap.quickTo(youCursorRef.current, "x", {
      duration: 0.55,
      ease: "power3.out",
      onUpdate: () => {
        youPos.current.x = gsap.getProperty(youCursorRef.current, "x");
        youPos.current.y = gsap.getProperty(youCursorRef.current, "y");
        checkCollision();
      },
    });
    const yTo = gsap.quickTo(youCursorRef.current, "y", {
      duration: 0.55,
      ease: "power3.out",
    });

    // ---- Collision detection ----
    const checkCollision = () => {
      const aneeshEl = aneeshCursorRef.current;
      if (!aneeshEl) return;

      const aneeshRect = aneeshEl.getBoundingClientRect();
      // Center of Aneesh label box
      const aneeshCx = aneeshRect.left + aneeshRect.width / 2;
      const aneeshCy = aneeshRect.top + aneeshRect.height / 2;

      // Current "You" cursor position
      const youX = youPos.current.x;
      const youY = youPos.current.y;

      const dx = youX - aneeshCx;
      const dy = youY - aneeshCy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const threshold = 90; // collision radius in px

      if (dist < threshold) {
        const repelStrength = ((threshold - dist) / threshold) * 22;
        const angle = Math.atan2(dy, dx);
        gsap.to(aneeshEl, {
          x: Math.cos(angle) * repelStrength,
          y: Math.sin(angle) * repelStrength,
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(aneeshEl.querySelector(".collab-cursor-label"), {
          scale: 1.12,
          duration: 0.25,
          ease: "power2.out",
        });
      } else {
        gsap.to(aneeshEl, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });
        gsap.to(aneeshEl.querySelector(".collab-cursor-label"), {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Snap to center before first move so it doesn't jump from top-left
    gsap.set(youCursorRef.current, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    window.addEventListener("mousemove", onMouseMove);
    document.body.classList.add("hide-default-cursor");

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.classList.remove("hide-default-cursor");
      gsap.killTweensOf(youCursorRef.current);
      gsap.killTweensOf(aneeshCursorRef.current);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div ref={containerRef} className="collab-cursors-wrapper">
      {/* ── "You" cursor – moves with the mouse ── */}
      <div className="collab-cursor-container" ref={youCursorRef}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="collab-cursor-arrow"
        >
          <path
            d="M2.5 14.5L1.5 1.5L14.5 6.5L8.5 8.5L2.5 14.5Z"
            fill="#1a1a1a"
          />
        </svg>
        <div className="collab-cursor-label" style={{ backgroundColor: "#1a1a1a" }}>
          You
        </div>
      </div>

      {/* ── "Aneesh" cursor – static, can be repelled ── */}
      <div
        className="collab-cursor-container static-cursor"
        ref={aneeshCursorRef}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="collab-cursor-arrow"
        >
          <path
            d="M2.5 14.5L1.5 1.5L14.5 6.5L8.5 8.5L2.5 14.5Z"
            fill="#f95c41"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <div className="collab-cursor-label" style={{ backgroundColor: "#f95c41" }}>
          Aneesh
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
