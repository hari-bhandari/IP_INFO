import React from 'react';
import './bootstrap.min.css'
import './App.css';
import WelcomePage from "./Components/sections/WelcomePage";
import Features from "./Components/sections/Features";
import Footer from "./Components/Layout/Footer";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <div className="App">
      <WelcomePage/>
      <Features/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
