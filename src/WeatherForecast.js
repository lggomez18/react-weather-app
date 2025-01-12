import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
  function handleResponse (response){
    
  }
  
  const apiKey = "290724cd93ad94b31t54c30cca2o800f";
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl =`https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apikey}`
  
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-md-4">
          
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="rain-day" size={props.size} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19° |</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>


            
        </div>
      </div>
    </div>
  );
}

