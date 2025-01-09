import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";



export default function WeatherForecast(props) {
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

