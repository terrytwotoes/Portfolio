import Projects from "./components/projects/Projects";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="bg-[#0f0f0f] px-5 md:px-20 lg:px-40">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
