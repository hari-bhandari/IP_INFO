import React from 'react';
import './bootstrap.min.css'
import './App.css';
import Navbar from "./Components/Layout/Navbar";
import WelcomePage from "./Components/sections/WelcomePage";
import Features from "./Components/sections/Features";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WelcomePage/>
      <Features/>
    </div>
  );
}

export default App;
