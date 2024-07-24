import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
    const [load, setLoad]= useState(false);
    const [temperature, setTemperature]= useState(null);
    const [weatherData, setWeatherData]= useState({});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({})
        setTemperature(response.data.main.temp);
        setLoad(true);
    }

    if (load){
        return (
        <div className="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input 
            type="submit" 
            value="Search" 
            className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Mostly cloudy" className="float-left"/>
                  
                        <div className="float-left">
                        <span className="temperature">{Math.round(temperature)}</span>
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
                         Humidity: 30%
                        </li>
                        <li>
                         Wind: {wind}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    } else {
        const apiKey ="290724cd93ad94b31t54c30cca2o800f";
        let city = "New York";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return "Loading";
    }  
}
