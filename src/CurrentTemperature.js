import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
    const [unit, setUnit] = useState('celsius');
    function convertToFahrenheit (event) {
        event.preventDefault();
        setUnit('fahrenheit');
        }
    function convertToCelsius (event) {
        event.preventDefault();
        setUnit('celsius');
    }
    if(unit === 'celsius') {
        return (
            <div className="CurrentTemperature">
                {props.temperature}  
                <span className="temp__c" > °C</span> 
                <span>|</span> 
                <a href="/" className="temp__f" onClick={convertToFahrenheit}>°F</a>
            </div>
            );
    } else {
        let fahrenheit = (props.temperature * 9/5) + 32;
        return (
            <div className="CurrentTemperature">
                {Math.round(fahrenheit)}  
                <a href="/" className="temp__c"  onClick={convertToCelsius}> °C</a> 
                <span>|</span> 
                <span className="temp__f">°F</span>
            </div>
            );
    }
    
    
}