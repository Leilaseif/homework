import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Searchengine.css";

export default function Searchengine (){
    let [city, setCity]= useState("");

    function handleSubmit(event){
        event.preventDefault();
        alert(`${city}`)
    }
    function updateCity(event){
        setCity(event.target.value);
    }
    return (
        <div>
        <h2>New york</h2>
        <form className="forming" onSubmit={handleSubmit}>
            <input className="search" type="search" onChange={updateCity}/>
            <input className="submit" type="submit" value="submit" />
        </form >
        <div className="temperature">
        <span className="number">12</span>
        <span className="unit">°c</span>
        </div>
        <div className="row">
            <div className="col-3 icon">&#9728;&#65039;</div>
            <div className="col-9 moredata">
                <span className="humidity"> humidity:50%</span><br />
                <span className="wind">wind:3km/h</span>
                </div>
        </div>

        </div>
    )
}