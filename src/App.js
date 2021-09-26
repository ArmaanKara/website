import React, {useState, useEffect} from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LoadingScreen from "./components/LoadingScreen"
// import Testimonials from "./components/Testimonials";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4500)
  }, [])

  return (
    <>
    {loading === false ? (
      <div className="App">
        <main>
          <Navbar />
          <About />
          <Projects />
          <Skills />
          {/* <Testimonials /> */}
          <Contact />
          <Footer/>
        </main>
      </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App