import React from "react";

export default function WeatherForecastDay(props){
    function maxTemperature(){
    let temperature = Math.round (props.data.max);
    return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round (props.data.min);
        return `${temperature}°`;
        }

    return (
        <div>
    <div className="WeatherForecast-day">{forecast[0].dt}</div>
    <WeatherIcon code={forecast[0].weather[0].icon} size={props.size} />
    <div className="WeatherForecast-temperatures">
      <span className="WeatherForecast-temperature-max">{max()}° |</span>
      <span className="WeatherForecast-temperature-min">{min()}°</span>
    </div>
    </div>
    );
}