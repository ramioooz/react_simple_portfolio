import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <Navbar/>
      {/* <h1>Hello World</h1> */}
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
