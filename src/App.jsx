import "./App.css";
import Header from "./components/01-header/Header";
import Home from "./components/02-home/Home";
import AboutMe from "./components/03-aboutMe/AboutMe";
import Projects from "./components/04-projects/Projects";
import Contact from "./components/05-contact/Contact";
import Footer from "./components/06-footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
