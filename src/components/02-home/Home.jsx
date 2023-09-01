import "./home.css";
import Social from "./Social";
import Data from "./Data";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container ">
        <div className="home-content">
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="home-top-query"
          >
            <Social />
            <img className="home-img" src="./assets/diti.jpg" alt="" />
          </motion.div>{" "}
          <Data />
        </div>
        <p className="home-scrollDown-name">
          Scroll Down <i className="uil uil-arrow-down"></i>
        </p>
        <div className="home-scrollDown"></div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Home;
