import React from "react";

export default function WeatherIcon(props){
    return(
        <img 
        src={weatherData.iconUrl} 
        alt={weatherData.description} className="float-left"/>
    )
}