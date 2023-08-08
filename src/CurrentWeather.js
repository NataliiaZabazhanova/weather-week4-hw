import React, { useState } from "react";
import Forecast from './Forecast';
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
    return (
        <>
        <div className="Currentweather">
            <div className="CurrentWeathe__main">
                <h2 className="CurrentWeather__city">{props.city}</h2>
                <p className="CurrentWeather__date">Wednesday, 12:45</p>
            </div>
            <div className="CurrentWeather__current">
                <h2 className="CurrentWeather__temp">{props.temperature} <a href="#" className="temp__c">°C</a> <span>|</span> <a href="#" className="temp__f">°F</a> </h2>
                <img src={props.icon} alt="weather" className="CurrentWeater__img"/>
            </div>
            <ul className="CurrentWeather__info">
                <li><span>Humidity:</span> {props.humidity} %</li>
                <li><span>Wind:</span> {props.wind} km/h</li>
                <li><span>Description:</span> {props.description}</li>
            </ul>
    </div>
     <Forecast />
    </>
    )
}