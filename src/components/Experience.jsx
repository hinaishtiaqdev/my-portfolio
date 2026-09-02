import React from "react";
import {
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

import "./Experience.css";

const ExperienceItem = ({
  title,
  company,
  location,
  duration,
  description,
  points,
  technologies,
}) => {
  return (
    <div className="experience-item">

      <div className="experience-dot"></div>

      <div className="experience-content">

        <div className="experience-top">

          <h3>{title}</h3>

          <span className="experience-duration">
            {duration}
          </span>

        </div>

        <div className="experience-company">

          <span className="company-name">
            {company}
          </span>

          {company !== "Freelance" && (
            <FaExternalLinkAlt className="company-link" />
          )}

          <span className="separator">•</span>

          <span className="job-type">
            {company === "Freelance" ? "Freelance" : "Full-time"}
          </span>

          <span className="separator">•</span>

          <span className="location">
            <FaMapMarkerAlt />
            {location}
          </span>

        </div>

        <p className="experience-description">
          {description}
        </p>

        <ul className="experience-points">

          {points.map((point, index) => (
            <li key={index}>
              {point}
            </li>
          ))}

        </ul>

        <div className="experience-tags">

          {technologies.map((technology, index) => (
            <span key={index}>
              {technology}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
};


function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-container">

        {/* ==============================
            SECTION HEADING
        ============================== */}

        <div className="experience-heading">

          <span className="experience-label">
            EXPERIENCE
          </span>

          <h2>
            Where I've worked
          </h2>

          <div className="experience-heading-line"></div>

          <p>
            Roles, responsibilities, and what I shipped.
          </p>

        </div>


        {/* ==============================
            EXPERIENCE GRID
        ============================== */}

        <div className="experience-grid">


          {/* ============================
              WORK
          ============================ */}

          <div className="work-column">

            <div className="column-title">
              <FaBriefcase />
              <span>WORK</span>
            </div>


            <div className="experience-timeline">


              {/* ============================
                  EXPERIENCE 1
              ============================ */}

              <ExperienceItem
                title="Frontend Web Developer"
                company="SYNEXUS TECHNOLOGIES"
                location="Remote"
                duration="2026 — Present"
                description="Building and maintaining modern web applications and user interfaces with a focus on performance, usability, and clean architecture."
                points={[
                  "Built reusable UI components using React, Next.js, and TypeScript.",
                  "Managed application state and complex user workflows with Redux Toolkit.",
                  "Integrated REST APIs and backend services into responsive frontend applications.",
                  "Worked with MySQL, PostgreSQL, MongoDB, Mongoose, and modern JavaScript technologies.",
                ]}
                technologies={[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "FastAPI",
                  "Redux Toolkit",
                  "MongoDB",
                  "PostgreSQL",
                  "MySQL",
                  "Tailwind CSS",
                ]}
              />


             

              {/* ============================
                  EXPERIENCE 3
              ============================ */}

              <ExperienceItem
                title="Full Stack Developer"
                company="Freelance"
                location="Remote"
                duration="2026 — Present"
                description="Designing and developing web applications for clients including dashboards, business websites, and full-stack applications."
                points={[
                  "Developed responsive websites and web applications from concept to deployment.",
                  "Built frontend interfaces with React, JavaScript, and modern CSS.",
                  "Developed backend functionality using Node.js and Express.js.",
                  "Worked with databases, APIs, authentication, and deployment workflows.",
                ]}
                technologies={[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST APIs",
                ]}
              />

            </div>

          </div>


          {/* ============================
              EDUCATION
          ============================ */}

        <div className="education-column">
  <div className="column-title">
    <FaGraduationCap />
    <span>EDUCATION</span>
  </div>

  {/* Education 1 */}


  
  <div className="education-item">
    <div className="education-dot"></div>

    <div className="education-content">
      <div className="education-top">
        <h3>Bachelor of Science, Software Engineering</h3>
        <span>2025 — 2029</span>
      </div>

      <h4>National University of Modern Languages (NUML)</h4>

      <p className="education-location">
        Islamabad, Pakistan
      </p>



      <p className="education-description">
        Coursework across data structures, algorithms, databases,
        software architecture, web engineering, and software development.
      </p>
    </div>
  </div>




  {/* Education 2 */}
<div className="education-item">
    <div className="education-dot"></div>
<br></br>
    <div className="education-content">
      <div className="education-top">
        
        <h3>FSc Pre-Engineering</h3>
        <span>2022 — 2024</span>
      </div>

      <h4>Fauji Foundation</h4>

      <p className="education-location">
        Jhelum, Pakistan
      </p>

      <p className="education-description">
        Focused on mathematics, physics, and chemistry, providing a strong foundation for engineering studies.
      </p>
    </div>
  </div>
</div>  
</div>
      </div>

    </section>
  );
}

export default Experience;