import About from "./components/sections/About";
import Contact from "./components/Contact";
import Experience from "./components/sections/Experience";
import Navbar from "./components/Navbar";
import Profile from "./components/sections/Profile";
import Projects from "./components/sections/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <h1>Hello World</h1> */}
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
