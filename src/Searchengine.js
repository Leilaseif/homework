import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Searchengine.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import UnitConversion from "./unitconversion";
import WeatherForecast from "./WeatherForecast";

export default function Searchengine (){
    const [ready , setReady]=useState(false);
    let [city, setCity]= useState("");
    let [weatherData, setweatherData]=useState({});

    function handleSubmit(event){
        event.preventDefault();
        search();
       
    }
    function updateCity(event){
        setCity(event.target.value);
    }
    function showTemperature (response){
        console.log(response.data);
        setweatherData({
            
            temper:response.data.main.temp , 
            wind:response.data.wind.speed ,
            humidity:response.data.main.humidity,
            description: response.data.weather[0].description ,
            iconUrl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date: new Date(response.data.dt) ,
            coordinates : response.data.coord ,
        });
        setReady(true);
    }
    function search() {
        const apiKey = "82796af55a1157613b4fa827494ee65a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
      }
   
        
    if(ready){    
    return (
      <div>
        <form className="forming" onSubmit={handleSubmit}>
            <input className="search" type="search" onChange={updateCity}/>
            <input className="submit" type="submit" value="submit" />
        </form >
        <FormattedDate date={weatherData.date}/>
        <h2>{city}</h2>
        <span className="description"> {weatherData.description}</span><br />
       <UnitConversion celsius={weatherData.temper}/>
        
        <div className="row">
            <div className="col-3 icon">
               <img  src={weatherData.iconUrl} alt="" />
            </div>
            <div className="col-9 moredata">
                <span className="humidity"> humidity:{weatherData.humidity} %</span><br />
                <span className="wind">wind:{weatherData.wind} km/h</span>
                </div>
        </div>
        <WeatherForecast coordinates={weatherData.coordinates} />

     </div>
    )}
    else{
        let city ="New York"
        const apiKey = "82796af55a1157613b4fa827494ee65a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
       
        return(<p>loading</p>)
        ;
    }
}