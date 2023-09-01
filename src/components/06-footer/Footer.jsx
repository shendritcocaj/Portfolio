import "./footer.css";

const Footer = () => {
  return (
    <footer className="section footer">
      <div className="footer-container container">
        <h1 className="footer-title">SHËNDRIT ÇOÇAJ</h1>
        <ul className="footer-list">
          <li>
            <a href="#home" className="footer-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer-link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/shendrit.cocaj/"
            className="home-social-icon footer-icon"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://github.com/shendritcocaj"
            className="home-social-icon  footer-icon"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shendrit-cocaj-a71b08257/"
            className="home-social-icon  footer-icon"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
        </div>
        <span className="footer-copy">
          &#169; Shendrit Cocaj. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
