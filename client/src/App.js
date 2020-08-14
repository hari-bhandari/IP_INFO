import React,{useState,useEffect} from 'react';
import './bootstrap.min.css'
import './App.css';
import WelcomePage from "./Components/sections/WelcomePage";
import Features from "./Components/sections/Features";
import Footer from "./Components/Layout/Footer";
import AboutMe from "./Components/AboutMe";
import Documentation from "./Components/sections/Documentation";

function App() {
    const [response, setResponse] = useState(null)
    const getIP = async () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        try {
            const res = await fetch("https://ip-api.me/getipinfo", requestOptions)
            setResponse(await res.clone().json())

        } catch (e) {
            console.log(e)
            setResponse('error')
        }

    }
    useEffect(async ()=>{
        await getIP()
        //changing favicon

    },[])
    //changing favicon
    useEffect(()=>{
        if(response) {
            const favicon = document.getElementById('favicon')
            favicon.href = response.flagUrl
        }
    },[response])
  return (
    <div className="App">
      <WelcomePage res={response}/>
      <Features/>
      <Documentation res={response}/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
