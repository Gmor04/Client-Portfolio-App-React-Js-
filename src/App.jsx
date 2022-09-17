import React from "react"
import { Routes, Route,} from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar"
import Home from "./Component/Home/Home";
import AboutMe from "./Component/AboutMe/AboutMe";
import Project from "./Component/Project/Project";
import ContactMe from "./Component/Contact/ContactMe";
import Resume from "./Component/Resume/Resume";
import Downpart from "./Component/Footer/Downpart";


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Get-to-know-me" element={<AboutMe />} />
      <Route exact path="/projects" element={<Project />} />
      <Route exact path="/contact" element={<ContactMe />} />
      <Route exact path="/resume" element={<Resume/>} />
      </Routes>
      <Downpart/>
    </div>
  )
}

export default App
