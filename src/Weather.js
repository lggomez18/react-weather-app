import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData]= useState({ ready:false });
    const [city, setCity] = useState(props.defaultCity);
   
    

    function handleResponse(response){
         setWeatherData({
            ready:true,
            coordinates: response.data.coordinates,
            temperature:response.data.temperature.current,            
            wind: response.data.wind.speed,
            humidity:response.data.temperature.humidity,
            date:new Date(response.data.time * 1000),
            description:response.data.condition.description,
            icon: response.data.condition.icon,
            city: response.data.city,
        });

        //iconUrl:response.data.condition.icon_url,
        //setTemperature(response.data.main.temp); instead of caling setTemperature, added inside setWeatherData
        //setReady(true); instead of calling set ready, added inside setWeatherData

    }

    function search(){
        const apiKey = "290724cd93ad94b31t54c30cca2o800f";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

    }


    function handleSubmit(event){
        event.preventDefault();
        search();
        //search for a city
    }

    function handleCityChange(event){
        setCity(event.target.value);

    }

    if (weatherData.ready){
        return (
        <div className="Weather" id="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
            />
            </div>
            <div className="col-3">
            <input 
            type="submit" 
            value="Search" 
            className="btn w-100"/>
            </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>

        </div>
        );
    } else {
       
        search();
        return "Loading";
    }  
}
