import About from "./components/sections/About";
import Contact from "./components/Contact";
import Experience from "./components/sections/Experience";
import Navbar from "./components/Navbar";
import Profile from "./components/sections/Profile";
import Projects from "./components/sections/Projects";

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
    </>
  );
}

export default App;
