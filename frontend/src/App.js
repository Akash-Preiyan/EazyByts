import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/about";
import Home from "./components/Home/home";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
