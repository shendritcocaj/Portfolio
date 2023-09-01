import "./aboutMe.css";

const AboutMe = () => {
  return (
    <section className="section" id="about">
      <div className="about-me container">
        <div className="about-top-info">
          <h2 className="about-title">ABOUT ME</h2>
          <div className="line-bottom"></div>
          <p className="about-description">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="about-bottom-info">
          <div className="about-know-me">
            <h3 className="about-know-me-title">Get to know me!</h3>
            <p className="about-know-me-description-one">
              I&apos;m a Frontend Web Developer building the Front-end of
              Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the{" "}
              <strong>Projects</strong> section.
            </p>
            <p className="about-know-me-description">
              I&apos;m open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don&apos;t hesitate to{" "}
              <strong>contact</strong> me.
            </p>{" "}
            <div>
              <a
                className="about-cv"
                href="./Shendrit Cocaj-Cv.pdf"
                download
                target="_blank"
              >
                {" "}
                Download CV <i className="uil uil-file"></i>
              </a>
            </div>
          </div>
          <div className="about-my-skills">
            <h3 className="about-skills-title">My Skills</h3>
            <div className="about-my-skills-items">
              <div className="skills-row-1">
                {" "}
                <div className="about-my-skills-item">HTML</div>
                <div className="about-my-skills-item">CSS</div>
                <div className="about-my-skills-item">JavaScript</div>
              </div>
              <div className="skills-row-2">
                {" "}
                <div className="about-my-skills-item">React</div>
                <div className="about-my-skills-item">SASS</div>
                <div className="about-my-skills-item">GIT</div>{" "}
                <div className="about-my-skills-item">Github</div>
              </div>
              <div className="skills-row-3">
                {" "}
                <div className="about-my-skills-item">Responsive Design</div>
                <div className="about-my-skills-item">Terminal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
