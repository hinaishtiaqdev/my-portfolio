import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiArrowUpRight,
} from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll to Home sections
  const handleSectionClick = (id) => {
    setMenuOpen(false);

    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Hire Me", href: "/hire" },
  ];

  return (
    <header className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="brand">
          <div className="brand-logo">HI</div>
          <span>Hina Ishtiaq</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href}>
              {link.name}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => handleSectionClick("about")}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => handleSectionClick("contact")}
          >
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">

          {/* Start Project */}
          <button
            type="button"
            className="project-btn"
            onClick={() => handleSectionClick("contact")}
          >
            Start a project
            <FiArrowUpRight />
          </button>

          {/* Theme Toggle */}
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <button
          type="button"
          onClick={() => handleSectionClick("about")}
        >
          About
        </button>

        <button
          type="button"
          onClick={() => handleSectionClick("contact")}
        >
          Contact
        </button>

        <button
          type="button"
          className="mobile-project-btn"
          onClick={() => handleSectionClick("contact")}
        >
          Start a project
          <FiArrowUpRight />
        </button>

      </div>
    </header>
  );
};

export default Navbar;