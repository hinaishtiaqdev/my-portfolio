import React, { useEffect, useState } from "react";
import "./Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaEye
} from "react-icons/fa";

function Hero() {
  const roles = [
    "Frontend Web Developer",
    "React Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <>
      <section className="hero" id="home">

        <div className="hero-container">

          {/* LEFT */}
          <div className="hero-content">

            <p className="hero-intro">
              Hello, I'm
            </p>

            <h1 className="hero-name">
              Hina Ishtiaq
            </h1>

            {/* ANIMATED ROLE */}
            <div className="hero-role">
              {displayText}
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-description">
              Frontend Developer specializing in React.js, JavaScript, HTML, CSS and Bootstrap. I build modern, responsive, and user-friendly web applications with clean, maintainable code and professional UI/UX. I focus on creating fast,
               interactive, and visually appealing web experiences
            </p>

            {/* MAIN BUTTONS */}
            {/* MAIN BUTTONS */}
<div className="hero-buttons">

  <a
    href="#contact"
    className="btn-primary"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
  >
    Get in touch
  </a>

  <a
    href="#work"
    className="btn-secondary"
    onClick={(e) => {
      e.preventDefault();
      window.location.hash = "work";
    }}
  >
    View my work
  </a>

</div>

      <div className="hero-socials">

  <a
    href="https://github.com/HinaIshtiaqDev"
    target="_blank"
    rel="noreferrer"
    className="social-btn"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/hinaishtiaq/"
    target="_blank"
    rel="noreferrer"
    className="social-btn"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="/#resume.pdf"
    className="social-btn resume-btn"
  >
    <FaEye />
    <span>Resume</span>
  </a>

</div>
</div>

          {/* RIGHT IMAGE */}
          <div className="hero-image-wrapper">

            <div className="glow glow-blue"></div>
            <div className="glow glow-orange"></div>
            <div className="glow glow-cyan"></div>

            <div className="hero-image-circle">
  <span className="hero-letter">H</span>
</div>

            <div className="code-badge">
              &lt;/&gt;
            </div>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="stats-section">

        <div className="stat-box">
          <strong>2+</strong>
          <span>Projects shipped</span>
        </div>

        <div className="stat-box">
          <strong>3</strong>
          <span>Months of experience</span>
        </div>

        <div className="stat-box">
          <strong>10+</strong>
          <span>Technologies used</span>
        </div>

        <div className="stat-box">
          <strong>12h</strong>
          <span>Average response time</span>
        </div>

      </section>
    </>
  );
}

export default Hero;