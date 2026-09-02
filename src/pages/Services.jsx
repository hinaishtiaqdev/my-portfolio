import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ProjectCTA from "../components/ProjectCTA";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { services } from "../data/ServicesData";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      {/* HEADER */}
      <section className="services-header-section">
        <div className="services-container">

          {/* Breadcrumb */}
          <div className="services-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Services</span>
          </div>

          <div className="services-label">SERVICES</div>

          <h1 className="services-title">
            How I can help
          </h1>

          <p className="services-subtitle">
            Focused engagements, scoped clearly, delivered on time.
          </p>

        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="services-cards-section">
        <div className="services-container">

          <div className="services-grid">
            {services.slice(0, 3).map((service) => {
              const Icon = service.icon;

              return (
                <div className="service-card" key={service.id}>

                  <div className="service-card-top">
                    <div className="service-icon">
                      <Icon />
                    </div>

                    <span className="service-number">
                      {service.number}
                    </span>
                  </div>

                  <h2>{service.title}</h2>

                  <p className="service-description">
                    {service.description}
                  </p>

                  <div className="service-technologies">
                    {service.technologies.map((technology, index) => (
                      <span key={index}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="service-divider"></div>

                  <div className="service-bottom">

                    <div className="service-price">
                      <span>From</span>
                      <strong>{service.price}</strong>
                    </div>

                    <Link
                      to={`/services/${service.slug}`}
                      className="service-details"
                    >
                      Details
                      <FiArrowRight />
                    </Link>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>
      <FAQ/>
      <ProjectCTA />
<Footer />

    </div>
    
  );
}

export default Services;