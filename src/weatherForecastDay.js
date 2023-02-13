import React from "react";
 export default function WeatherForecastDay (props){
    return(
        <div>
        <div className="dayForecast">{props.data.dt}</div>
        <div className="iconForecast">{props.data.weather[0].icon}</div>
        <div className="temperatureForecast">
        <span className="temperatureForecast-max">{Math.round(props.data.temp.max)}°</span>
        <span className="temperatureForecast-min">{Math.round(props.data .temp.min )}°</span>
        </div>
        </div>
    )
 }