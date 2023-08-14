import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from './Forecast';

export default function Weather() {
const [city, setCity] = useState(null);
const [weather, setWeather] = useState({});
const [loaded, setLoaded] = useState(false);
const [result, setResult] = useState("");
function displayWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
        //for forecast
        coord: response.data.coord,
        temperature: Math.round(response.data.main.temp),
        humidity: Math.round(response.data.main.humidity),
        wind: Math.round(response.data.wind.speed),
        //for showing current data
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
}
    function handleSubmit(event) {
        event.preventDefault();
        //alert(city);
        let apiKey = "0ea82a607a1deae6e8685bedc59bc1f1";
        let unit = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(displayWeather);
        setResult(city);
    }
    function updCity(event) {
        setCity(event.target.value);
    }
    let form = (<form className="search" onSubmit={handleSubmit}>
                    <input className="search__field" type="search" placeholder=" Type a city..." onChange={updCity}/>
                    <button className="search__btn search__btn_m" type="submit">Search</button>
                </form>);

    if(loaded) {
        return (
            <div className="Weather">
                {form}
                <CurrentWeather city={result} temperature={weather.temperature} humidity={weather.humidity} wind={weather.wind} date={weather.date} description={weather.description} icon={weather.icon} />
                <Forecast coord={weather.coord} />
            </div>
            );
    } else {
        return form;
    }
}