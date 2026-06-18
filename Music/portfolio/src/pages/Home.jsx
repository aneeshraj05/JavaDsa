import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "./home.css";

import MusicPlayer from "../components/music/MusicPlayer";
import Toolbar from "../components/menu/Toolbar";
import Details from "../components/details/Details";
import Note from "../components/Note/Note";
import Camera from "../components/camera/camera";
import Pen from "../components/pen/pen";
import Envelope from "../components/envelope/envelope";
import stick from "./stickly.png";
import canvaso from "./canvaso.png";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lamp from "../components/lamp/lamp";
import Quotes from "../components/quotes/quotes";
import expense from "./expense.png";
import resume from "./resume.pdf";

gsap.registerPlugin(Flip, ScrollTrigger);

const Home = () => {
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [mode, setMode] = useState("coffee");
  const [commentText, setCommentText] = useState(
    "// Welcome to my desk. Click around.",
  ); 
  
  const [animateAboutNotations, setAnimateAboutNotations] = useState(false);
  const [animateCookingNotations, setAnimateCookingNotations] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState("");
  const [visitorCount, setVisitorCount] = useState(1024);

  const projectListRef = useRef(null);
  const commentRef = useRef(null); 

  const unlockAudio = () => setAudioUnlocked(true);
  
  const openResumeInNewTab = () => {
    window.open(resume, "_blank", "noopener,noreferrer");
  };

  const projects = [
    {
      name: "Stickly",
      desc: "Organize ideas, notes, and tasks effortlessly",
      img: stick,
      link: "https://sticky-notes-three-eta.vercel.app/",
    },
    {
      name: "Canvaso",
      desc: "Hand-drawn style diagrams and intuitive digital whiteboarding",
      img: canvaso,
      link: "https://canvaso-v10.vercel.app/",
    },
    {
      name: "ExpenseTrak",
      desc: "Track expenses, manage budgets, and gain control of your finances",
      img: expense,
      link: "https://expense-tracker-zn8u.onrender.com/",
    },
  ];

  useEffect(() => {
    const energeticAnimeQuotes = [
      "Nah, I'd win.",
      "What doesn't kill you makes you stronger.",
      "If you don't like your destiny, don't accept it. Instead, have the courage to change it!",
      "Push past your limits. Right here. Right now!",
      "The only way to truly grow is to face opponents stronger than yourself.",
      "I am the master of my own fate; I am the captain of my soul."
    ];
    
    const randomPick = energeticAnimeQuotes[Math.floor(Math.random() * energeticAnimeQuotes.length)];
    setSelectedQuote(randomPick);

    const storedCount = localStorage.getItem("workspace_visitor_metric");
    if (storedCount) {
      const parsedCount = parseInt(storedCount, 10) + 1;
      localStorage.setItem("workspace_visitor_metric", parsedCount);
      setVisitorCount(parsedCount);
    } else {
      const startingMetric = Math.floor(Math.random() * (1350 - 1050 + 1)) + 1050;
      localStorage.setItem("workspace_visitor_metric", startingMetric);
      setVisitorCount(startingMetric);
    }
  }, []);

  useLayoutEffect(() => {
    const state = Flip.getState(".flip-item");
    document.body.setAttribute("data-mode", mode);
    Flip.from(state, { duration: 0.2, ease: "power3.inOut", scale: true });
  }, [mode]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = projectListRef.current?.querySelectorAll(".project-card");
      if (!cards) return;
      cards.forEach((card) => {
        const hoverAnim = gsap.to(card, {
          y: -8,
          scale: 1.02,
          translateZ: 0,
          duration: 0.35,
          paused: true,
          ease: "power4.out",
        });

        card.addEventListener("mouseenter", () => hoverAnim.play());
        card.addEventListener("mouseleave", () => hoverAnim.reverse());
      });
    }, projectListRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const updateCommentText = (newText) => {
      gsap.to(commentRef.current, {
        opacity: 0,
        y: -4,
        duration: 0.2,
        onComplete: () => {
          setCommentText(newText);
          gsap.to(commentRef.current, { opacity: 1, y: 0, duration: 0.3 });
        },
      });
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".about-me-section",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          updateCommentText("// Let me introduce myself properly...");
          setAnimateAboutNotations(true);
        },
        onEnterBack: () => {
          updateCommentText("// Let me introduce myself properly...");
          setAnimateAboutNotations(true);
        },
        onLeaveBack: () => {
          updateCommentText("// Welcome to my desk. Click around.");
          setAnimateAboutNotations(false);
        },
      });

      ScrollTrigger.create({
        trigger: ".projects-combined-page",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          updateCommentText("// Here is what I'm cooking and building...");
          setAnimateCookingNotations(true);
        },
        onEnterBack: () => {
          updateCommentText("// Here is what I'm cooking and building...");
          setAnimateCookingNotations(true);
        },
        onLeaveBack: () => {
          setAnimateCookingNotations(false);
        },
      });

      ScrollTrigger.create({
        trigger: ".contact-section",
        start: "top 50%",
        end: "bottom bottom",
        onEnter: () => updateCommentText("// Let's build something cool together."),
        onLeaveBack: () => updateCommentText("// Here is what I'm cooking and building..."),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div onClick={unlockAudio}>
      <div ref={commentRef} className="floating-narrator-comment">
        {commentText}
      </div>

      <section className="desk">
        <MusicPlayer audioUnlocked={audioUnlocked} />
        <Toolbar mode={mode} setMode={setMode} />
        <Details />
        <Note audioUnlocked={audioUnlocked} />
        <Camera />
        <Pen audioUnlocked={audioUnlocked} />
        <Lamp />
        <Quotes />
        
        <div onClick={openResumeInNewTab} className="envelope-click-zone">
          <Envelope audioUnlocked={audioUnlocked} />
        </div>
      </section>

      <section className="about-page">
        <div className="about-content">
          
          <div className="about-me-section">
            <h2>About ⌘</h2>
            <RoughNotationGroup show={animateAboutNotations}>
              <p>
                I am{" "}
                <RoughNotation type="underline" color="#d97706" strokeWidth={2}>
                  <span className="handwritten" style={{ fontSize: "1.3rem" }}>Aneesh Raj</span>
                </RoughNotation>
                , a full-stack engineer who loves crafting meaningful interactions and bringing fun ideas to life.
              </p>
              
              <p>
                Currently, I am in my{" "}
                <RoughNotation type="highlight" color="#fef08a" iterations={1} multiline={true}>
                  <span><strong>4th year studying Information Technology</strong></span>
                </RoughNotation>{" "}
                at{" "}
                <RoughNotation type="box" color="#2563eb" strokeWidth={1.5} multiline={true}>
                  <span>College of Engineering and Technology</span>
                </RoughNotation>, holding a cumulative CGPA of{" "}
                <RoughNotation type="circle" color="#dc2626" strokeWidth={2}>
                  <strong>8.75</strong>
                </RoughNotation>.
              </p>

              <p>
                My weapon of choice spans across building scalable systems and mapping clean layouts. My core developer technical stack includes:
              </p>

              <div className="skills-grid">
                <span className="skill-wrapper">
                  <RoughNotation type="bracket" brackets={["left", "right"]} color="#06b6d4" strokeWidth={2}>
                    <span className="skill-tag">React</span>
                  </RoughNotation>
                </span>
                <span className="skill-wrapper">
                  <RoughNotation type="bracket" brackets={["left", "right"]} color="#10b981" strokeWidth={2}>
                    <span className="skill-tag">Express</span>
                  </RoughNotation>
                </span>
                <span className="skill-wrapper">
                  <RoughNotation type="bracket" brackets={["left", "right"]} color="#3b82f6" strokeWidth={2}>
                    <span className="skill-tag">MySQL</span>
                  </RoughNotation>
                </span>
                <span className="skill-wrapper">
                  <RoughNotation type="bracket" brackets={["left", "right"]} color="#8b5cf6" strokeWidth={2}>
                    <span className="skill-tag">MongoDB</span>
                  </RoughNotation>
                </span>
                <span className="skill-wrapper">
                  <RoughNotation type="bracket" brackets={["left", "right"]} color="#ec4899" strokeWidth={2}>
                    <span className="skill-tag">Figma</span>
                  </RoughNotation>
                </span>
              </div>
            </RoughNotationGroup>
          </div>

          <div className="projects-combined-page">
            <div className="cooking-block">
              <h2>Currently Learning ◉</h2>
              <RoughNotationGroup show={animateCookingNotations}>
                <p>
                  Currently exploring{" "}
                  <RoughNotation
                    type="underline"
                    color="#f59e0b"
                    strokeWidth={2}
                    multiline={true}
                  >
                    <span className="handwritten">Spring Boot</span>
                  </RoughNotation>{" "}
                  and sharpening my problem-solving skills through Data Structures &
                  Algorithms.
                </p>

                <p>
                  Building backend projects, creating REST APIs, and improving my Java
                  fundamentals one step at a time.
                </p>
              </RoughNotationGroup>
            </div>

            <div className="recent-block">
              <h2>Recently Made ▶</h2>
              <div className="project-list" ref={projectListRef}>
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                  >
                    <div className="project-card">
                      <img src={project.img} alt={project.name} />
                      <div>
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h2>Say Hello ✉</h2>
            <div className="contact-card-wrapper">
              <p className="contact-intro">
                Have an interesting opening, a project idea, or just want to discuss code architecture? Drop me a line:
              </p>
              <a href="mailto:aneesh.rajx@gmail.com" className="email-link">
                aneesh.rajx@gmail.com
              </a>
            </div>

            <div className="contact-footer-metrics">
              {selectedQuote && (
                <div className="anime-quote-block">
                  <span className="quote-label">// Motivation:</span>
                  <p className="quote-text">"{selectedQuote}"</p>
                </div>
              )}
              
              <div className="visitor-badge">
                <span className="badge-pulse"></span>
                <span className="visitor-label">Total Desk Views:</span>
                <span className="visitor-number">{visitorCount}</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  ); 
};

export default Home;