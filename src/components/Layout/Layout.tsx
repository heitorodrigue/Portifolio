import Navbar from "../Navbar";
import Hero from "../Hero";
import Projects from "../Projects";
import About from "../About";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </>
  );
}