import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./details.css";
import "../../index.css";
import linkedin from "./linke.png";
import github from "./image.png";

gsap.registerPlugin(TextPlugin);

export default function Details() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if it's mobile (width <= 768px or your preferred breakpoint)
    const isMobile = window.innerWidth <= 768;

    // If not mobile, skip the animation
    if (!isMobile) return;

    const name = containerRef.current.querySelector(".details-name");
    const title = containerRef.current.querySelector(".details-title h2");
    const subTitle = containerRef.current.querySelector(".details-title span");
    const desc = containerRef.current.querySelector(".details-description");
    const socialIcons = containerRef.current.querySelectorAll(".social-icon");

    const nameText = "Aneesh Raj";
    const titleText = "Full Stack Developer";
    const subTitleText = "Design & Development";
    const descText = "creating websites and applications that value simplicity, purpose, and detail.";

    // Clear text content for typing animation
    name.textContent = "";
    title.textContent = "";
    subTitle.textContent = "";
    desc.textContent = "";

    // Initially hide social icons on mobile
    socialIcons.forEach(icon => {
      gsap.set(icon, { opacity: 0, y: 10, scale: 0.8 });
    });

    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.to(name, {
      duration: 0.6,
      text: { value: nameText },
      delay: 0.3
    })
    .to(title, {
      duration: 0.8,
      text: { value: titleText }
    }, "+=0.1")
    .to(subTitle, {
      duration: 0.6,
      text: { value: subTitleText }
    }, "+=0.1")
    .to(desc, {
      duration: 1.8,
      text: { value: descText },
      ease: "power1.inOut"
    }, "+=0.1")
    .to(socialIcons, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.15
    }, "-=0.3"); // Start social icons animation slightly before description finishes

    // Handle resize events
    const handleResize = () => {
      const isMobileNow = window.innerWidth <= 768;
      if (!isMobileNow) {
        // If resized to desktop, kill animation and show everything
        tl.kill();
        // Reset all elements to visible state
        const elements = [name, title, subTitle, desc];
        elements.forEach(el => {
          if (el) {
            el.textContent = el === name ? "Aneesh Raj" :
                            el === title ? "Full Stack Developer" :
                            el === subTitle ? "Design & Development" :
                            "creating websites and applications that value simplicity, purpose, and detail.";
            gsap.set(el, { opacity: 1 });
          }
        });
        socialIcons.forEach(icon => {
          gsap.set(icon, { opacity: 1, y: 0, scale: 1 });
        });
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
    };

  }, []);

  return (
    <section ref={containerRef} className="details flip-item">
      <h1 className="details-name">Aneesh Raj</h1>
      <div className="details-title">
        <h2>Full Stack Developer</h2>
        <span>Design & Development</span>
      </div>
      <p className="details-description">
        creating websites and applications that value simplicity, purpose, and detail.
      </p>
      <div className="social-links">
        <a
          href="https://linkedin.com/in/aneeshraj05"
          target="_blank"
          rel="noreferrer"
          data-tooltip="LinkedIn"
          className="social-icon"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/aneeshraj05"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          data-tooltip="GitHub"
        >
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </section>
  );
}