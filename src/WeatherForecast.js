import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
  let [loaded, setloaded]= useState(false);
  let [forecast, setForecast] = useState (null);

  function handleResponse (response){
  setForecast(response.data.daily);  

  }
  
  if (loaded){
  let apiKey = "290724cd93ad94b31t54c30cca2o800f";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl =`https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return null;
} else {
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
  
}

