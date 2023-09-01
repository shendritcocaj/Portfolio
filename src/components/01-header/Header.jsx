import { useState } from "react";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  // show menu
  const [menu, showMenu] = useState(false);
  return (
    <header className="header">
      <motion.nav className="nav container">
        <motion.a
          animate={{ y: 0 }}
          initial={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          whileInView={{ opacity: 1 }}
          href="index.html"
          className="nav-logo"
        >
          Shëndrit
        </motion.a>

        <div className={menu ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <motion.li
              animate={{ y: 0 }}
              initial={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              whileInView={{ opacity: 1 }}
              className="nav-item"
            >
              <a href="#" className="nav-link">
                <i className="uil uil-estate nav-icon"></i> Home
              </a>
            </motion.li>
            <motion.li
              animate={{ y: 0 }}
              initial={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6 }}
              whileInView={{ opacity: 1 }}
              className="nav-item"
            >
              <a href="#about" className="nav-link">
                <i className="uil uil-user nav-icon"></i> About
              </a>
            </motion.li>
            <motion.li
              animate={{ y: 0 }}
              initial={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1 }}
              className="nav-item"
            >
              <a href="#projects" className="nav-link">
                <i className="uil uil-window nav-icon"></i> Projects
              </a>
            </motion.li>
            <motion.li
              animate={{ y: 0 }}
              initial={{ y: -30, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              className="nav-item"
            >
              <a href="#contact" className="nav-link">
                <i className="uil uil-message nav-icon"></i> Contact
              </a>
            </motion.li>
          </ul>

          <i
            className="uil uil-times nav-close"
            onClick={() => showMenu(!menu)}
          ></i>
        </div>

        <div className="nav-toggle" onClick={() => showMenu(!menu)}>
          <i className="uil uil-apps"></i>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
