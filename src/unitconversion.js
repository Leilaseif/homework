import React , {useState} from "react";

export default function UnitConversion (props){
    const [unit, setUnit]=useState("celsius");
    function changeToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function changeToCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }
    if (unit==="celsius"){
        return(
            <div className="temperature">
            <span className="number">{Math.round(props.celsius)}</span>
            <span className="unit" >°c |<a href="/"  onClick={changeToFahrenheit}> °F</a></span>
            </div>
        );
    }else {
        let fahrenheit =(props.celsius *9)/5 +32;
        return(
            <div className="temperature">
            <span className="number">{Math.round(fahrenheit)}</span>
            <a  className="unit" href="/" onClick={changeToCelsius} >°c </a><span className="unit" >| °F</span>
            </div>
        );
    }
   
}