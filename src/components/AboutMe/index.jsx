import React, { useState } from "react";
import "./style.css";
import MY_PICTURE from "./Izz_pic.jpg";
import SectionTitle from "../SectionTitle";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [education, setEducation] = useState(true);
  const [projects, setProjects] = useState(false);

  return (
    <section className="about-section sec-padding" id="about">
      <div className="container">
        <SectionTitle title={"About me"} />
        <div className="about__container">
          <div className="about-img">
            <div className="img-box">
              <img src={MY_PICTURE} alt="about img" />
            </div>
          </div>

          <div className="about-text">
            <p>
              I am Bishal Budhathoki, a Bachelor of Computer Application (BCA)
              student at Samriddhi College under Tribhuvan University. I am
              passionate about computer software and enjoy building modern
              web applications using technologies like React, JavaScript, PHP,
              and MySQL. I believe in learning through hands-on projects,
              experimenting with new technologies, and continuously improving my
              skills. I also embrace AI as a powerful tool that helps me work
              smarter, solve problems efficiently, and prepare for the future of
              software development.
            </p>

            <h3>skills</h3>

            <div className="skills">
              <div className="skill-item">HTML5</div>
              <div className="skill-item">CSS3</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">React</div>
              <div className="skill-item">PHP</div>
              <div className="skill-item">MySQL</div>
              <div className="skill-item">Java</div>
              <div className="skill-item">C++</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">Git</div>
              <div className="skill-item">GitHub</div>
              <div className="skill-item">VS Code</div>
            </div>

            <div className="about-tabs">
              <button
                className="tab-item active"
                onClick={() => {
                  setEducation(true);
                  setProjects(false);
                }}
              >
                education
              </button>

              <button
                className="tab-item"
                onClick={() => {
                  setProjects(true);
                  setEducation(false);
                }}
              >
                Projects
              </button>
            </div>

            <div className="content__container">
              {education ? (
                <div className="content">
                  <div className="tab-content active" id="education">
                    <div className="timeline">
                      <div className="timeline-item">
                        <span className="date">2024-2028</span>

                        <h4>
                          Bachelor of computer Application
                          <span> (Samriddhi College)</span>
                        </h4>

                        <p>
                          I am currently pursuing a Bachelor in Computer
                          Application (BCA) at Samriddhi College under
                          Tribhuvan University. My academic journey focuses on
                          software engineering, programming, database systems,
                          and modern web technologies, while I continuously
                          strengthen my skills by building practical projects
                          and exploring new technologies.
                        </p>

                        <a href="https://tu.edu.np/">
                          university page
                        </a>
                      </div>

                      <div className="timeline-item">
                        <span className="date">2022-2024</span>

                        <h4>
                          +2 in computer Science
                          <span> ( Shree Singhadevi Academy )</span>
                        </h4>

                        <p>
                          I completed my Higher Secondary Education (+2) in
                          Computer Science, where I built a strong foundation
                          in programming, computer fundamentals, and web
                          technologies. During my studies, I developed an
                          interest in software development and gained hands-on
                          experience with HTML, CSS, JavaScript, and database
                          concepts. This experience inspired me to pursue a
                          Bachelor in Computer Application (BCA) and continue
                          expanding my knowledge in modern web development and
                          software engineering.
                        </p>

                        <a href="https://www.facebook.com/share/181DB4DsaE/">
                          Secondary School page
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : projects ? (
                <div className="tab-content active" id="education">
                  <div className="timeline">
                    <div className="timeline-item">
                      <h4 className="date">
                        Smash'Em Game App :
                        <span>React & JavaScript</span>
                      </h4>

                      <p>
                        A fun and interactive web-based game built to improve
                        my frontend development skills. The project focuses on
                        responsive design, smooth user interactions, and
                        engaging gameplay using modern web technologies.
                        <br />
                        Technologies Used: React, JavaScript, HTML, CSS.
                      </p>

                      <a href="https://github.com/bishalbudhathoki004/smashem">
                        Review Code
                      </a>
                    </div>
                  </div>

                  <div className="timeline">
                    <div className="timeline-item">
                      <h4 className="date">
                        Student Feedback Form :
                        <span>React & Node.js</span>
                      </h4>

                      <p>
                        A web application developed for collecting and managing
                        student feedback efficiently. It provides an intuitive
                        interface for users while securely storing feedback
                        through a backend API.
                        <br />
                        Technologies Used: React, Node.js, HTML, CSS,
                        JavaScript.
                      </p>

                      <a href="https://github.com/Samriddhicollege/BCA-2081-3rdSemester-Feedbackform">
                        Review Code
                      </a>
                    </div>
                  </div>

                  <div className="timeline">
                    <div className="timeline-item">
                      <h4 className="date">
                        Student Management System :
                        <span>PHP & MySQL</span>
                      </h4>

                      <p>
                        Currently developing a Student Management System as an
                        academic project. The system is designed to manage
                        student records, user authentication, profiles, and
                        administrative operations through a simple and
                        user-friendly interface.
                        <br />
                        Technologies Used: PHP, MySQL, HTML, CSS, JavaScript.
                      </p>

                      <a href="#">Coming Soon</a>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="btns">
                <a
                  href="https://drive.google.com/file/d/1VKgEiuQ54aLQAWN6hn_VfKZr_cio9Xd6/view"
                  className="btn"
                >
                  see my cv
                </a>

                <Link to="/contact" className="btn link-item">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;