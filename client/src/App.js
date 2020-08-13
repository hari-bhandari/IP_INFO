import React from 'react';
import './bootstrap.min.css'
import './App.css';
import Navbar from "./Components/Layout/Navbar";
import WelcomePage from "./Components/sections/WelcomePage";
import Features from "./Components/sections/Features";
import AboutMe from "./Components/sections/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WelcomePage/>
      <Features/>
      <AboutMe/>
    </div>
  );
}

export default App;
