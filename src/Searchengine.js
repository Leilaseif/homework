import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Searchengine.css";
import axios from "axios";

export default function Searchengine (){
    const [ready , setReady]=useState(false);
    let [city, setCity]= useState("");
    let [weatherData, setweatherData]=useState({});

    function handleSubmit(event){
        event.preventDefault();
       
    }
    function updateCity(event){
        setCity(event.target.value);
    }
    function showTemperature (response){
        setweatherData({
            temper:response.data.main.temp , 
            wind:response.data.wind.speed ,
            humidity:response.data.main.humidity,
            // description: response.data.weather[0].description ,
            // iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            // date: new Date(response.data.dt)
        });
        setReady(true);
    }
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
        axios.get(apiUrl).then(showTemperature);
       
   
        
    if(ready){    
    return (
      <div>
        <form className="forming" onSubmit={handleSubmit}>
            <input className="search" type="search" onChange={updateCity}/>
            <input className="submit" type="submit" value="submit" />
        </form >
        <h2>{city}</h2>
        <span className="description"> {weatherData.description} %</span><br />
       
        <div className="temperature">
        <span className="number">{Math.round(weatherData.temper)}</span>
        <span className="unit">°c</span>
        </div>
        <div className="row">
            <div className="col-3 icon">
               {/* <img  src={weatherData.iconUrl} alt="" /> */}
            </div>
            <div className="col-9 moredata">
                <span className="humidity"> humidity:{weatherData.humidity} %</span><br />
                <span className="wind">wind:{weatherData.wind} km/h</span>
                </div>
        </div>

     </div>
    )}
    else{
        let city ="New York"
        let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82796af55a1157613b4fa827494ee65a&units=metric`;
        axios.get(apiUrl).then(showTemperature);
       
        return(<p>loading</p>)
        ;
    }
}