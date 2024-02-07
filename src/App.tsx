import React from 'react';
import './App.css';
import Header from "./layout/header/header";
import Main from "./layout/sections/main/Main";
import Menu from "./layout/sections/menu/Menu";
import AboutMe from "./layout/sections/aboutMe/AboutMe";
import Projects from "./layout/sections/projects/projects";
import Skills from "./layout/sections/skills/Skills";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Menu/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
