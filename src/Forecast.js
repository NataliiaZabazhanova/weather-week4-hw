import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    //console.log(props.coord);
    function displayForecast(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }


    if(loaded) {
        console.log(forecast);
    return (
        <div className="Forecast">
            <div className="Forecast__row">
                <p className="Forecast__temp"><span className="Forecast__temp_max">{forecast[0].temperature.maximum} °C</span><span className="Forecast__temp_min">{Math.round(forecast[0].temperature.minimum)} °C</span></p>
                <p className="Forecast__day">Monday</p>
                <img src="" className="Forecast__img" alt="weather"></img>
            </div>
        </div>
        );
    } else { 
        let apiKey = "bf636449b03206034d0ac2d97t9eo009";
        let longitude = props.coord.lon;
        let latitude = props.coord.lat;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayForecast);

        return null;
}
        
}