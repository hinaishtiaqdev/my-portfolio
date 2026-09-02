import React from "react";
import { FiStar } from "react-icons/fi";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <span className="section-label">TESTIMONIALS</span>

          <h2>What people say</h2>

          <div className="section-underline"></div>

          <p>
            Feedback from the people I've built for.
          </p>
        </div>

        <div className="testimonial-card">

          <div className="testimonial-stars">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>

          <p className="testimonial-text">
            “Hina understood our design requirements quickly and turned them
into a clean, responsive interface. Her attention to detail and
modern approach resulted in a polished and user-friendly experience.”
          </p>

          <div className="testimonial-divider"></div>

          <div className="testimonial-author">

            <div className="author-avatar">
              MI
            </div>

            <div>
              <h3>Muhammad Ahmad</h3>
              <span>Product Lead, Private Client</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;