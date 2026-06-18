import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin"; // Import the typing plugin
import "./details.css";
import "../../index.css";
import linkedin from "./linke.png";
import github from "./image.png";

// Register the plugin with GSAP
gsap.registerPlugin(TextPlugin);

export default function Details() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Grab the target elements inside our ref container
    const name = containerRef.current.querySelector(".details-name");
    const title = containerRef.current.querySelector(".details-title h2");
    const subTitle = containerRef.current.querySelector(".details-title span");
    const desc = containerRef.current.querySelector(".details-description");
    const socialIcons = containerRef.current.querySelectorAll(".social-icon");

    // Define the exact text strings to type out
    const nameText = "Aneesh Raj";
    const titleText = "Full Stack Developer";
    const subTitleText = "Design & Development";
    const descText = "creating websites and applications that value simplicity, purpose, and detail.";

    // Pre-clear the text content so it starts empty before typing begins
    name.textContent = "";
    title.textContent = "";
    subTitle.textContent = "";
    desc.textContent = "";

    // Set up the typing sequence timeline
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.to(name, {
      duration: 0.6,
      text: { value: nameText },
      delay: 0.3
    })
    .to(title, {
      duration: 0.8,
      text: { value: titleText }
    }, "+=0.1") // Slight pause before starting next line
    .to(subTitle, {
      duration: 0.6,
      text: { value: subTitleText }
    }, "+=0.1")
    .to(desc, {
      duration: 1.8,
      text: { value: descText },
      ease: "power1.inOut" // A softer curve makes long sentences look more like natural typing
    }, "+=0.1")
    .fromTo(socialIcons, 
      { opacity: 0, y: 10, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out", stagger: 0.1 },
      "-=0.2" // Pop the social links in just before the description finishes typing
    );

  }, []);

  return (
    <section ref={containerRef} className="details flip-item">
      {/* 
        Leave your default text static inside the markup. 
        This acts as a solid fallback for SEO crawlers or if JavaScript fails to load,
        while GSAP will instantly handle clearing and typing it out on mount!
      */}
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