import React, { useState } from "react";
import {
  FiMail,
  FiMessageCircle,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7737539f-7cf7-4f81-a096-992ccb0e7c81",

          subject: `New Portfolio Contact from ${formData.name}`,

          from_name: "Portfolio Website",

          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! I will get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Unable to send message. Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <span className="section-label">
            CONTACT
          </span>

          <h2>Let's build something</h2>

          <div className="section-underline"></div>

          <p>
            Tell me what you're working on. I read every message
            and reply as soon as possible.
          </p>
        </div>

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="availability">
              <span></span>
              Available for freelance work
            </div>

            {/* EMAIL */}
            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <span>EMAIL</span>

                <strong>
                  hinaishtiaqdev@gmail.com
                </strong>
              </div>
            </div>

            {/* WHATSAPP */}
            

            {/* LOCATION */}
            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <span>BASED IN</span>

                <strong>
                  Jhelum, Pakistan
                </strong>
              </div>
            </div>

            {/* PROFILES */}
            <div className="contact-item">
              <div className="contact-icon">
                <FiGithub />
              </div>

              <div>
                <span>PROFILES</span>

                <div className="profile-links">
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
                </div>
              </div>
            </div>

            <div className="reply-box">
              Usually replies within 12 hours
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-card">

            <form onSubmit={handleSubmit}>

              {/* NAME + EMAIL */}
              <div className="form-row">

                <div className="form-group">
                  <label>Name *</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

              </div>

              {/* PROJECT TYPE + BUDGET */}
              <div className="form-row">

                <div className="form-group">
                  <label>Project type</label>

                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="">
                      What do you need?
                    </option>

                    <option value="Website">
                      Website
                    </option>

                    <option value="Web Application">
                      Web Application
                    </option>

                    <option value="E-commerce">
                      E-commerce
                    </option>

                    <option value="Dashboard">
                      Dashboard
                    </option>

                    <option value="API / Backend">
                      API / Backend
                    </option>

                    <option value="Portfolio">
                      Portfolio
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Budget</label>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">
                      Rough range
                    </option>

                    <option value="$300 - $600">
                      $300 - $600
                    </option>

                    <option value="$600 - $1000">
                      $600 - $1000
                    </option>

                    <option value="$1000 - $2000">
                      $1000 - $2000
                    </option>

                    <option value="$2000+">
                      $2000+
                    </option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}
              <div className="form-group">

                <label>Message *</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me what you're building, what's blocking you, and when you need it."
                  rows="7"
                  required
                ></textarea>

              </div>

              {/* STATUS MESSAGE */}
              {status.message && (
                <div
                  className={`form-status ${status.type}`}
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="send-message-btn"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send message"}

                <FiSend />
              </button>

              <p className="privacy-text">
                Your details stay private and are never shared.
              </p>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;