import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Weather from "./Weather";


export default function WeatherInfo(props){
    return(
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>

<ul>
    <li><FormattedDate date={props.data.date} /></li>
    <li className="text-capitalize">{props.data.description}</li>
</ul>

    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
            
            <div className="float-left">
            <WeatherIcon code={props.data.iconUrl} alt={props.data.description}/>
            </div>
          
                <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature}/>
                
                </div>
            </div>
        </div>
    
        <div className="col-6">
            <ul>
                <li>
                 Precipitation: 15%   
                </li>
                <li>
                 Humidity:{props.data.humidity}
                </li>
                <li>
                 Wind:{props.data.wind}
                </li>
            </ul>
        </div>
    </div>
    </div>
    );
}

//    <li>{weatherData.date}</li> below     <li><FormattedDate date={props.data.date} /></li> had to be removed as the issue would try to print the object. 
