import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";



export default function WeatherForecast(props) {
  let [loaded, setLoaded]= useState(false);
  let [forecast, setForecast] = useState (null);

  function handleResponse (response){
  setForecast(response.data.daily);
  setLoaded(true);

  }
  
  if (loaded){
    
    return (
      <div className="WeatherForecast">
        <div className="row">
          
          <div className="col-md-4">
            <WeatherForecastDay data={forecast[0]}/>
           
          </div>
          
        </div>
      </div>
    );
} else {
   
  let apiKey = "290724cd93ad94b31t54c30cca2o800f";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl =`https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return null;
}
  
}

