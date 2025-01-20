import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
//import Weather from "./Weather";


export default function WeatherInfo(props){

    return(
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>

<ul>
    <li>
        <FormattedDate date={props.data.date} />
    </li>
    <li className="text-capitalize">{props.data.description}</li>
</ul>

    <div className="row mt-4">
        <div className="col-6">
            <div className="clearfix">
            
            <div className="float-start">
            <WeatherIcon code={props.data.icon} />
            </div>
            <div className="align-items-right">
            <WeatherTemperature celsius={props.data.temperature}/>
            </div>

            </div>
        </div>
    
        <div className="col-6">
            <ul>
                <li>
                 Humidity: {props.data.humidity}%
                </li>
                <li>
                 Wind: {props.data.wind}
                </li>
            </ul>
        </div>
    </div>
    </div>
    );
}

//    <li>{weatherData.date}</li> below     <li><FormattedDate date={props.data.date} /></li> had to be removed as the issue would try to print the object. 
