import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        Open-sourced on {""} <a href="https://github.com/lggomez18/react-weather-app" target="_blank" rel="noreferrer" >Github</a>
      </footer>
      </div>
    </div>
  );
}


