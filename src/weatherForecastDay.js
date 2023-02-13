import React from "react";
 export default function WeatherForecastDay (props){
    function day(){
        let date= new Date(props.data.dt*1000);
        let day = date.getDay();
        let days=["Sun","Mon","Tuesday","Wed","Thu","Fri","Sat "];
       
        return days[day];
    
    }
    return(
        <div>
        <div className="dayForecast">{day()}</div>
        <div className="iconForecast">{props.data.weather[0].icon}</div>
        <div className="temperatureForecast">
        <span className="temperatureForecast-max">{Math.round(props.data.temp.max)}°</span>
        <span className="temperatureForecast-min">{Math.round(props.data .temp.min )}°</span>
        </div>
        </div>
    )
 }