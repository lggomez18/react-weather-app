import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
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
            date:new Date(response.data.dt * 1000),
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
        <WeatherInfo data={weatherData}/>

        </div>
        );
    } else {
        const apiKey ="290724cd93ad94b31t54c30cca2o800f";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return "Loading";
    }  
}
