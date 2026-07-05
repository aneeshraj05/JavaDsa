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
import Cursor from "../components/cursor/cursor";
import Cr from "../components/cameraroll/cr";
import Photo from "../components/photoshop/photo";
import CustomCursor from "../components/CustomCursor/CustomCursor";

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
  const [showCollabCursor, setShowCollabCursor] = useState(false);

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
      "I am the master of my own fate; I am the captain of my soul.",
      "The moment you give up is the moment you let someone else win.",
      "Believe in yourself. Not in the you who believes in me. Not the me who believes in you. Believe in the you who believes in yourself!",
      "Hard work betrays none, but dreams betray many.",
      "The world isn't perfect. But it's there for us, doing the best it can. That's what makes it so damn beautiful.",
      "Power comes in response to a need, not a desire.",
      "There's no shame in being weak. The shame is in staying weak.",
      "If you can't fly, run. If you can't run, walk. If you can't walk, crawl. But by all means, keep moving forward.",
      "A person who has never made a mistake has never tried anything new.",
      "The only true wisdom is in knowing you know nothing.",
      "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
      "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
      "I don't know how to give up. It's not in my vocabulary.",
      "You just need to be a little bit stronger than your excuses.",
      "Sometimes the best way to solve your own problems is to help someone else.",
      "Every journey starts with a single step. Even the longest and most difficult of roads.",
      "A lesson without pain is meaningless. That's because you cannot gain something without sacrificing something else in return.",
      "The future is not set. There's no fate but what we make for ourselves.",
      "When you give up, that's when the game is really over.",
      "Strength isn't about how much you can lift. It's about how much you can endure.",
      "The greatest teacher, failure is.",
      "Do not pity the dead, Harry. Pity the living. And above all, those who live without love.",
      "We are who we choose to be. Now choose!",
      "It's not the size of the dog in the fight, it's the size of the fight in the dog.",
      "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.",
      "Sometimes you have to be your own hero.",
      "Even the darkest night will end and the sun will rise.",
      "The only thing we have to fear is fear itself.",
      "In the middle of difficulty lies opportunity.",
      "To be the best, you must be able to handle the worst.",
      "Your life is your own. Rise up and live it.",
      "Hesitation is the seed of defeat.",
      "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
      "The journey of a thousand miles begins with a single step.",
      "It does not matter how slowly you go as long as you do not stop.",
      "When you are at your lowest, that is when you are open to the greatest change.",
      "There is always a way out. You just have to look for it.",
      "The only limit to our realization of tomorrow will be our doubts of today.",
      "Let the future tell the truth and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I really worked, is mine.",
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "The secret of getting ahead is getting started.",
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "No matter what happens, don't ever give up.",
      "You are not alone. There are people who believe in you.",
      "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.",
      "What you do today can improve all your tomorrows.",
      "Believe you can and you're halfway there.",
      "You can't cross the sea merely by standing and staring at the water.",
      "It always seems impossible until it's done.",
      "The only way to do great work is to love what you do.",
      "Opportunities don't happen. You create them.",
      "Sometimes the strongest among us are the ones who smile through silent pain, cry behind closed doors, and still fight for what they believe in.",
      "A person's true strength is not measured by how much they can endure, but by how much they can rise after falling.",
      "Don't let the fear of losing keep you from winning.",
      "The pain you feel today is the strength you'll feel tomorrow.",
      "If you can dream it, you can do it.",
      "Every moment is a fresh beginning.",
      "You are braver than you believe, stronger than you seem, and smarter than you think.",
      "Life isn't about waiting for the storm to pass. It's about learning to dance in the rain.",
      "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
      "In the end, we only regret the chances we didn't take.",
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      "You must be the change you wish to see in the world.",
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      
      // New motivational and anime quotes
      "I don't want to conquer anything. I just think the guy with the most freedom in this ocean is the Pirate King!",
      "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom? No! It's when... they are forgotten!",
      "A wound that never heals can only be inflicted by someone you love.",
      "It's not about being the best. It's about being better than you were yesterday.",
      "The world is full of suffering, but it is also full of the overcoming of it.",
      "Perfection is not just about control. It's also about letting go.",
      "Don't be afraid of the darkness. Be afraid of the light that doesn't shine.",
      "Sometimes, the only way to move forward is to look back and understand.",
      "Strength isn't about being unbeatable. It's about getting back up when you fall.",
      "The only thing we can do is live our lives to the fullest, with no regrets.",
      "You can't change the past, but you can shape the future.",
      "A battle is not won by the strong, but by the ones who never give up.",
      "When you hit rock bottom, the only way to go is up.",
      "Dreams don't work unless you do.",
      "Your life is the result of your own decisions.",
      "Don't let anyone tell you that you can't do something. If you have a dream, protect it.",
      "Great things never come from comfort zones.",
      "The greatest wealth is to live content with little.",
      "Happiness is not something ready-made. It comes from your own actions.",
      "The best revenge is massive success.",
      "Do not wait for leaders; do it alone, person to person.",
      "If you want to shine like the sun, first burn like the sun.",
      "It's not the years in your life that count. It's the life in your years.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "Success is walking from failure to failure with no loss of enthusiasm.",
      "The only impossible journey is the one you never begin.",
      "Sometimes you have to lose yourself to find yourself.",
      "Don't count the days, make the days count.",
      "The best way to predict your future is to create it.",
      "Life is 10% what happens to you and 90% how you react to it.",
      "The only person you should try to be better than is the person you were yesterday.",
      "Strive not to be a success, but rather to be of value.",
      "It's not whether you get knocked down, it's whether you get up.",
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "The way to get started is to quit talking and begin doing.",
      "Your time is limited, don't waste it living someone else's life.",
      "If life were predictable it would cease to be life, and be without flavor.",
      "Life is what happens when you're busy making other plans.",
      "Get busy living or get busy dying.",
      "You only live once, but if you do it right, once is enough.",
      "Never let the fear of striking out keep you from playing the game.",
      "In three words I can sum up everything I've learned about life: it goes on.",
      "To live is the rarest thing in the world. Most people exist, that is all.",
      "The purpose of our lives is to be happy.",
      "Life is really simple, but we insist on making it complicated.",
      "Life is a succession of lessons which must be lived to be understood.",
      "The biggest adventure you can take is to live the life of your dreams.",
      "Life is either a daring adventure or nothing at all.",
      "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
      "Life is a journey, not a destination.",
      "The greatest pleasure in life is doing what people say you cannot do.",
      "Life's tragedy is that we get old too soon and wise too late.",
      "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
      "The secret of life is to fall seven times and to get up eight times.",
      "Life isn't about finding yourself. Life is about creating yourself.",
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
      "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      "The good life is one inspired by love and guided by knowledge.",
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      "The only way to do great work is to love what you do.",
      "In the end, it's not the years in your life that count. It's the life in your years.",
      "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
      "Start where you are. Use what you have. Do what you can.",
      "The best revenge is to be unlike him who performed the injury.",
      "Don't watch the clock; do what it does. Keep going.",
      "It does not matter how slowly you go as long as you do not stop.",
      "The man who moves a mountain begins by carrying away small stones.",
      "You miss 100% of the shots you don't take.",
      "The mind is everything. What you think you become.",
      "The greatest discovery of all time is that a person can change their future by merely changing their attitude.",
      "In the middle of every difficulty lies opportunity.",
      "The only real mistake is the one from which we learn nothing.",
      "A champion is someone who gets up when they can't.",
      "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
      "The key to success is to focus on goals, not obstacles.",
      "Don't be pushed around by the problems in your life. Be pushed by the dreams in your heart.",
      "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."
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
      // Skip animation if in desktop mode
      if (mode === "desktop") {
        setCommentText(newText);
        return;
      }

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
          setShowCollabCursor(true);
        },
        onEnterBack: () => {
          updateCommentText("// Here is what I'm cooking and building...");
          setAnimateCookingNotations(true);
          setShowCollabCursor(true);
        },
        onLeave: () => {
          setShowCollabCursor(false);
        },
        onLeaveBack: () => {
          setAnimateCookingNotations(false);
          setShowCollabCursor(false);
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
  }, [mode]);

  return (
    <div onClick={unlockAudio}>
      <CustomCursor active={showCollabCursor} />
      <div ref={commentRef} className="floating-narrator-comment">
        {commentText}
      </div>

      <section className="desk">
        <MusicPlayer audioUnlocked={audioUnlocked} />
        <Toolbar mode={mode} setMode={setMode} />
        <Details />
        <Note audioUnlocked={audioUnlocked} />
        <Cr audioUnlocked={audioUnlocked} />
        <Camera />
        <Photo audioUnlocked={audioUnlocked}/>
        <Pen audioUnlocked={audioUnlocked} />
        <Cursor audioUnlocked={audioUnlocked}/>
        <Lamp />
        <Quotes audioUnlocked={audioUnlocked} />
        
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
                  <span>Hindusthan College of Engineering and Technology</span>
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