import React from "react";
import "./CurrentWeather.css";
import CurrentDate from "./CurrentDate";
import CurrentTemperature from "./CurrentTemperature";

export default function CurrentWeather(props) {
    return (
        <>
        <div className="Currentweather">
            <div className="CurrentWeathe__main">
                <h2 className="CurrentWeather__city">{props.city}</h2>
                <div className="CurrentWeather__date"><CurrentDate date={props.date} /></div>
            </div>
            <div className="CurrentWeather__weather">
                <div className="CurrentWeather__current">
                    <h2 className="CurrentWeather__temp"> <CurrentTemperature temperature={props.temperature} /> </h2>
                    <img src={props.icon} alt="weather" className="CurrentWeater__img"/>
                </div>
                <ul className="CurrentWeather__info">
                    <li><span>Humidity:</span> {props.humidity} %</li>
                    <li><span>Wind:</span> {props.wind} km/h</li>
                    <li><span>Description:</span> {props.description}</li>
                </ul>
            </div>
    </div>
    </>
    )
}