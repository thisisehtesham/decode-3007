import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import ForCTOs from './pages/ForCTOs';
import Projects from './pages/Projects';
import Services from './pages/Services';
import HowWeWork from './pages/HowWeWork';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Careers from './pages/Careers';
import { LetsTalk } from './pages/LetsTalk';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forCTOs" element={<ForCTOs/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/howWeWork" element={<HowWeWork/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/letsTalk" element={<LetsTalk/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

