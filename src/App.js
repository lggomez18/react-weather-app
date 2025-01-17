import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
      <footer>
        This project was coded by 
        <a href="https://www.linkedin.com/in/leticia-gmz/" rel="noreferrer">Leticia Gmx</a> 
        and is{""} 
        <a href="https://github.com/lggomez18/react-weather-app" target="_blank" rel="noreferrer" >open-sourced on Github</a>.
        Hosted on {""} <a href="https://rreact-wweather-app.netlify.app/" rel="noreferrer">Netlify</a>
      </footer>
      </div>
    </div>
  );
}


