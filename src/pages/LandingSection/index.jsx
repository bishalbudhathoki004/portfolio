import React from "react";
import "./style.css";
import LANDING_SECTION_IMAGE from "./hello.png";
import { Link } from "react-router-dom";

function LandingSection() {
  return (
    <section className="home-section align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello, I'm</p>

            <h1>Bishal Budhathoki</h1>

            <h2>
              Aspiring Full-Stack Web Developer | BCA Student at Samriddhi
              College
            </h2>

            <Link to="/about" className="btn link-item">
              More About Me
            </Link>

            <a
              href="https://github.com/bishalbudhathoki004"
              target="_blank"
              rel="noopener noreferrer"
              className="btn link-item"
            >
              View GitHub
            </a>
          </div>

          <div className="home-img">
            <div className="img-box">
              <img src={LANDING_SECTION_IMAGE} alt="Bishal Budhathoki" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;