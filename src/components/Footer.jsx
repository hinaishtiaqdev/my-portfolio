import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  const goToSection = (id) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <div className="footer-logo-row">

              <div className="footer-logo">
                MA
              </div>

              <h3>
                Muhammad Awais Abid
              </h3>

            </div>

            <p>
              Frontend Developer specializing in React.js, JavaScript,
              HTML, CSS and Bootstrap. I build modern, responsive, and
              user-friendly web applications with clean, maintainable
              code and professional UI/UX.
            </p>

            <div className="footer-availability">
              <span></span>
              Available for freelance work
            </div>

          </div>


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
              onClick={() => goToSection("contact")}
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
              onClick={() => goToSection("about")}
            >
              About
            </button>

            <button
              type="button"
              onClick={() => goToSection("skills")}
            >
              Skills
            </button>

            <button
              type="button"
              onClick={() => goToSection("experience")}
            >
              Experience
            </button>

            <button
              type="button"
              onClick={() => goToSection("testimonials")}
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

            <button
              type="button"
              onClick={() => goToSection("contact")}
            >
              <FiMail />
              Email
            </button>

          </div>

        </div>


        {/* FOOTER BOTTOM */}
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