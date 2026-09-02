import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaDatabase,
  FaJava,
  FaPython,
  FaBootstrap,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaTools,
  FaRocket,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMongoose,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiFastapi,
} from "react-icons/si";

import "./Skills.css";

const SkillItem = ({ icon, name }) => (
  <div className="skill-pill">
    <span className="skill-icon">{icon}</span>
    <span>{name}</span>
  </div>
);

const SkillCard = ({ title, count, children }) => (
  <div className="skill-card">
    <div className="skill-card-header">
      <div className="skill-title">
        <span className="title-line"></span>
        <span>{title}</span>
      </div>

      <span className="skill-count">{count}</span>
    </div>

    <div className="skill-list">{children}</div>
  </div>
);

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* HEADING */}
        <div className="skills-heading">
          <span className="section-label">SKILLS</span>

          <h2>What I work with</h2>

          <div className="heading-line"></div>

          <p>
            The tools and technologies I use to build modern web applications.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="skills-grid">

          {/* FRONTEND */}
          <SkillCard title="FRONTEND" count="9">
            <SkillItem icon={<FaHtml5 />} name="HTML5" />
            <SkillItem icon={<FaCss3Alt />} name="CSS3" />
            <SkillItem icon={<FaJs />} name="JavaScript" />
            <SkillItem icon={<FaReact />} name="React" />
            <SkillItem icon={<FaBootstrap />} name="Bootstrap" />
         
          </SkillCard>

          

          {/* TOOLS */}
          <SkillCard title="TOOLS" count="6">
            <SkillItem icon={<FaGitAlt />} name="Git" />
            <SkillItem icon={<FaGithub />} name="GitHub" />
            <SkillItem icon={<FaFigma />} name="Figma" />
            <SkillItem icon={<FaCode />} name="VS Code" />
          </SkillCard>

         

          {/* LANGUAGES */}
          <SkillCard title="LANGUAGE" count="4">
            <SkillItem icon={<FaJs />} name="JavaScript" />

            <SkillItem icon={<FaJava />} name="Java" />
            
          </SkillCard>

          {/* PRACTICES */}
          <SkillCard title="PRACTICES" count="4">
            <SkillItem icon={<FaServer />} name="REST APIs" />
          
            <SkillItem icon={<FaMobileAlt />} name="Responsive Design" />
            <SkillItem icon={<FaCode />} name="Clean Code" />
            <SkillItem icon={<FaRocket />} name="Performance" />
          </SkillCard>

        </div>
      </div>
    </section>
  );
}

export default Skills;