import React from "react";
import "./Forecast.css";

export default function Forecast() {
        return (
    <div className="Forecast">
        <p className="Forecast__temp">20 °C</p>
        <p className="Forecast__day">Monday</p>
        <img src="" className="Forecast__img" alt="weather"></img>
    </div>
    );
        
}