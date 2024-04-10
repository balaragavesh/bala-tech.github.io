import "./App.css";
import About from "./component/About";
import Hero from "./component/Home/Hero";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./component/Services";
import Laptop from "./component/Laptop";
import Footer from "./component/Footer";
import Blog from "./component/Blog";
import { Element } from "react-scroll";
import { useRef } from "react";
function App() {
  const homeref = useRef(null);
  const aboutref = useRef(null);
  const servicesref = useRef(null);
  const contactref = useRef(null);
  const laptopref = useRef(null);

  const handleHome = () => {
    console.log(homeref);
    homeref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAbout = () => {
    console.log(homeref);
    aboutref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleService = () => {
    console.log(homeref);
    servicesref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleLaptop = () => {
    console.log(homeref);
    laptopref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleContact = () => {
    contactref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      <Element>
        <Navbar handleHome={handleHome} handleAbout={handleAbout} handleContact={handleContact} handleService={handleService} handleLaptop={handleLaptop} />
        <Hero homeref={homeref} laptopref={laptopref} handleAbout id="home" />
        <About aboutref={aboutref} id="about" />
        <Services handleContact={handleContact} servicesref={servicesref} id="services" />
        <Blog id="blog" />
        {/* <Laptop laptopref={laptopref} id="laptop" /> */}
        <Footer contactref={contactref}  />
      </Element>
    </div>
  );
}

export default App;