import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData]= useState({ ready:false });
    //const [city, setCity] = useState("London");
    //const [ready, setReady]=useState(false);
    //const [temperature, setTemperature]= useState(null);

    function handleResponse(response){


        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            wind: response.data.main.wind,
            humidity:response.data.main.humidity,
            date:"Wednesday 07:00",
            description:response.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            city: response.data.name,
        });

        //setTemperature(response.data.main.temp); instead of caling setTemperature, added inside setWeatherData
        //setReady(true); instead of calling set ready, added inside setWeatherData


    }

    if (weatherData.ready){
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
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
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
    } else {
        const apiKey ="290724cd93ad94b31t54c30cca2o800f";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultcity}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return "Loading";
    }  
}
