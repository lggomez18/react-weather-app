import React, { useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";



export default function WeatherForecast(props) {
  let [loaded, setLoaded]= useState(false);
  let [forecast, setForecast] = useState (null);

  useEffect(()=> {
    setLoaded(false);
  }, [props.coordinates]);


  //if the coordinates change
  //set loaded to false

  function handleResponse (response){
  setForecast(response.data.daily);
  setLoaded(true);
  }

function load(){
  let apiKey = "290724cd93ad94b31t54c30cca2o800f";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;  axios.get(apiUrl).then(handleResponse);

  axios.get(apiUrl).then(handleResponse);
}
  
  if (loaded){
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-md-4" key={index}>
                  <WeatherForecastDay data={dailyForecast}/>
                </div>
                  );
            } else {
              return null;
            }
            
          })}
        </div>
      </div>
    );
} else {
  load(); 
  
  return null;
  }
  
}

