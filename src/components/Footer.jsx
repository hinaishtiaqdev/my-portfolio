import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo-row">

              <div className="footer-logo">
                HI
              </div>

              <h3>
                Hina Ishtiaq
              </h3>

            </div>

            <p>
Frontend Developer specializing in React.js, JavaScript, HTML, CSS and Bootstrap. I build modern, responsive, and user-friendly web applications with clean, maintainable code and professional UI/UX. I focus on creating fast, 
interactive, and visually appealing web experiences            </p>

            <div className="footer-availability">
              <span></span>
              Available for freelance work
            </div>

          </div>


          {/* EXPLORE */}
{/* EXPLORE */}
<div className="footer-column">
  <span className="footer-heading">
    EXPLORE
  </span>

  <Link to="/work">
    Work
  </Link>

  <Link to="/services">
    Services
  </Link>

  <Link to="/hire">
    Hire Me
  </Link>

  <button
    type="button"
    onClick={() => {
      window.location.href = "/#/";
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }}
  >
    Contact
  </button>
</div>


{/* MORE */}
<div className="footer-column">
  <span className="footer-heading">
    MORE
  </span>

  <button
    type="button"
    onClick={() => {
      window.location.href = "/#/";
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }}
  >
    About
  </button>

  <button
    type="button"
    onClick={() => {
      window.location.href = "/#/";
      setTimeout(() => {
        document.getElementById("skills")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }}
  >
    Skills
  </button>

  <button
    type="button"
    onClick={() => {
      window.location.href = "/#/";
      setTimeout(() => {
        document.getElementById("experience")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }}
  >
    Experience
  </button>

  <button
    type="button"
    onClick={() => {
      window.location.href = "/#/";
      setTimeout(() => {
        document.getElementById("testimonials")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }}
  >
    Testimonials
  </button>
</div>

          {/* CONNECT */}

          <div className="footer-column">

            <span className="footer-heading">
              CONNECT
            </span>

            <a
              href="https://github.com/HinaIshtiaqDev"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hinaishtiaq/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
              LinkedIn
            </a>

            <a href="#contact">
              <FiMail />
              Email
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Hina Ishtiaq. All rights reserved.
          </span>

          <span>
            Built with React.js · Jhelum, Pakistan
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;