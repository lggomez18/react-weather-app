import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
    return(
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>

<ul>
    <li><FormattedDate date={props.data.date} /></li>
    <li>{weatherData.date}</li>
    <li className="text-capitalize">{weatherData.description}</li>
</ul>

    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
            
            <div className="float-left">
            <WeatherIcon code={props.data.icon} alt={props.data.description}/>
            </div>

            <img 
            src={weatherData.iconUrl} 
            alt={weatherData.description} className="float-left"/>
          
                <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
                </div>
            </div>
        </div>
    
        <div className="col-6">
            <ul>
                <li>
                 Precipitation: 15%   
                </li>
                <li>
                 Humidity:{weatherData.humidity}
                </li>
                <li>
                 Wind:{weatherData.wind}
                </li>
            </ul>
        </div>
    </div>
    </div>
    );
}