import React from 'react';
import './bootstrap.min.css'
import './App.css';
import Navbar from "./Components/Layout/Navbar";
import WelcomePage from "./Components/sections/WelcomePage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WelcomePage/>
    </div>
  );
}

export default App;
