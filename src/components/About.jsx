import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      {/* Heading */}
      <div className="about-heading">
        <span>ABOUT</span>
        <h2>About me</h2>
        <div className="about-line"></div>
        <p>
          Background, experience, and how I approach building software.
        </p>
      </div>

      {/* Content */}
      <div className="about-container">

        {/* Left */}
        <div className="about-text">

          <p>
            I'm a Frontend Developer specializing in React.js, JavaScript, HTML, CSS, Bootstrap, and responsive web design. I build modern, high-performance, and user-friendly web interfaces with clean and reusable code.

I focus on turning designs and ideas into responsive web applications that provide smooth and engaging user experiences across all devices.

I also work with Git, GitHub, and modern development tools to create reliable and scalable frontend solutions.
          </p>

          <div className="about-buttons">
  <a
    href="#contact"
    className="about-primary"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
  >
    Work with me
  </a>


            <a href="/resume.pdf" className="about-resume">
              👁 Resume
            </a>
          </div>

        </div>

        {/* Right Cards */}
        <div className="about-cards">

          <div className="about-card">
            <div className="about-icon">🎓</div>
            <div>
              <span>EDUCATION</span>
              <h3>BS Software Engineering — NUML Islamabad</h3>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">💼</div>
            <div>
              <span>EXPERIENCE</span>
              <h3>2+ months shipping production software</h3>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">💡</div>
            <div>
              <span>FOCUS</span>
              <h3>Clean architecture & Building the Web with Passion</h3>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">🚀</div>
            <div>
              <span>GOAL</span>
              <h3>Scalable products with measurable impact</h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;