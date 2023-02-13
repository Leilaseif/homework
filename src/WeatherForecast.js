import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./weatherForecastDay";


export default function WeatherForecast (props ) {
    let [loaded ,setLoaded]= useState(false);
    let [Forecast ,setForecast]=useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
if (loaded){
    return (
        <div>
        <div className="row">
        <div className="col">
       <WeatherForecastDay data={Forecast[0]}/>
        </div></div>
        </div>
    );
    
    }else {
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
    
            return (null);
}
 }