import Navbar from "../Navbar";
import Hero from "../Hero";
import Projects from "../Projects";
import About from "../About";
import Skills from "../Skills";
import Experience from "../Experience";
import Contact from "../Contact";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />  
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}