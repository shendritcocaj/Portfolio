import { GiHand } from "react-icons/gi";
import { motion } from "framer-motion";
const Data = () => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home-data"
    >
      <h1 className="home-title">
        Shëndrit Çoçaj
        <GiHand className="wave-hand" />
      </h1>
      <h3 className="home-subtitle">Frontend Web Developer </h3>
      <p className="home-description">
        A Frontend Web Developer based in Prishtina-Kosovo.I&apos;m very
        passionate and dedicated to my work...
      </p>
      <a href="#contact" className="home-button">
        Say Hello <i className="uil uil-message "></i>
      </a>
    </motion.div>
  );
};

export default Data;
