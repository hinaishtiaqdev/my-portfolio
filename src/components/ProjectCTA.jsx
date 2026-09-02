import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./ProjectCTA.css";

function ProjectCTA() {
  return (
    <section className="project-cta-section">

      <div className="project-cta">

        <div className="cta-circle cta-circle-left"></div>
        <div className="cta-circle cta-circle-right"></div>

        <div className="project-cta-content">

          <h2>Have a project in mind?</h2>

          <p>
            Whether it's an MVP, a dashboard, or a rescue mission on an
            existing codebase — let's talk about it.
          </p>

          <div className="project-cta-buttons">

            <div className="cta-buttons">

  <a
    href="#contact"
    className="cta-primary"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
  >
    Start a project
    <FiArrowRight />
  </a>

  <a href="/#/hire" className="cta-secondary">
    See how I work
  </a>

</div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectCTA;