import "./projects.css";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="projects container">
        <div className="projects-top-info">
          <h2 className="projects-title">PROJECTS</h2>
          <div className="line-bottom"></div>
          <p className="projects-description">
            Here you will find some projects that I created recently
          </p>
        </div>
        <div className="projects-items">
          <div className="project-item">
            <img src="./assets/p3.png" alt="Astro Club Kosova" />
            <div className="project-item-name">Astro Club Kosova</div>
            <a
              href="https://astroclubk.netlify.app/"
              className="project-demo"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Demo <i className="uil uil-arrow-right"></i>
            </a>
          </div>

          <div className="project-item">
            <img src="./assets/p4.png" alt="OnNews" />
            <div className="project-item-name">OnNews</div>
            <a
              href="https://bucolic-frangollo-311c89.netlify.app/"
              className="project-demo"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Demo <i className="uil uil-arrow-right"></i>
            </a>
          </div>

          <div className="project-item">
            <img src="./assets/p5.png" alt="Salary Calculator" />
            <div className="project-item-name">Salary Calculator</div>
            <a
              href="https://playful-panda-2dd9ba.netlify.app/"
              className="project-demo"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Demo <i className="uil uil-arrow-right"></i>
            </a>
          </div>

          <div className="project-item">
            <img src="./assets/p2.png" alt="E-shop" />
            <div className="project-item-name">E-shop</div>
            <a
              href="https://glistening-halva-3d8ab5.netlify.app/index.html"
              className="project-demo"
              target="_blank"
              rel="noreferrer"
            >
              Demo <i className="uil uil-arrow-right"></i>
            </a>
          </div>

          <div className="project-item">
            <img src="./assets/p1.png" alt="Neighbour Countries" />
            <div className="project-item-name">Neighbour Countries</div>
            <a
              href="https://genuine-genie-db519b.netlify.app/"
              className="project-demo"
              target="_blank"
              rel="noreferrer"
            >
              Demo <i className="uil uil-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
