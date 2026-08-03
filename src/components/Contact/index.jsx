import Form from "../Form";
import SectionTitle from "../SectionTitle";
import "./style.css";

const Contact = () => {
  return (
    <section className="contact-section sec-padding" id="contact">
      <div className="container">
        <SectionTitle title="Contact Me" />

        <div className="row contact-form-container">

          {/* Left Side */}
          <div className="contact-info">
            <div className="contact-card">
              <h2>Let's Connect </h2>

              <p className="contact-text">
                I'm always open to discussing internships, freelance work,
                collaborations, or simply having a conversation about web
                development. Feel free to reach out anytime.
              </p>

              <div className="info-box">
                <h3>📧 Email</h3>
                <a href="mailto:bishalbudhathoki004@gmail.com">
                  bishalbudhathoki004@gmail.com
                </a>
              </div>

              <div className="info-box">
                <h3>📱 Phone</h3>
                <a href="tel:+9779862043429">
                  +977 9862043429
                </a>
              </div>

              <div className="info-box">
                <h3>💻 GitHub</h3>
                <a
                  href="https://github.com/bishalbudhathoki004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/bishalbudhathoki004
                </a>
              </div>

              <div className="info-box">
                <h3>💼 LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/bishal-budhathoki-2517b3393"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/bishal-budhathoki-2517b3393
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <Form />

        </div>
      </div>
    </section>
  );
};

export default Contact;