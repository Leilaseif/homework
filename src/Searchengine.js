import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Searchengine.css";
import axios from "axios";
export default function Searchengine (){
    let [city, setCity]= useState("");
    let [temperature, setTemperature]=useState({});

    function handleSubmit(event){
        event.preventDefault();
    }
    function updateCity(event){
        setCity(event.target.value);
    }
    function showTemperature (response){
        setTemperature({
            temper:response.data.main.temp , 
            wind:response.data.wind.speed ,
            humidity:response.data.main.humidity
        });
    }
    let apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9777feb9b9683ea2533ba76e82f84952&units=metric`
    axios.get(apiurl).then(showTemperature)
    return (
        <div>
        <h2>New york</h2>
        <form className="forming" onSubmit={handleSubmit}>
            <input className="search" type="search" onChange={updateCity}/>
            <input className="submit" type="submit" value="submit" />
        </form >
        <div className="temperature">
        <span className="number">{Math.round(temperature.temper)}</span>
        <span className="unit">°c</span>
        </div>
        <div className="row">
            <div className="col-3 icon">&#9728;&#65039;</div>
            <div className="col-9 moredata">
                <span className="humidity"> humidity:{temperature.humidity} %</span><br />
                <span className="wind">wind:{temperature.wind} km/h</span>
                </div>
        </div>

        </div>
    )
}