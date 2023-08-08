import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
const [city, setCity] = useState(null);
const [weather, setWeather] = useState({});
function displayWeather(response) {
    setWeather({
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
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
    }
    function updCity(event) {
        setCity(event.target.value);
    }
    return (
    <div className="Weather">
        <form className="search" onSubmit={handleSubmit}>
            <input className="search__field" type="search" placeholder=" Type a city..." onChange={updCity}/>
            <button className="search__btn" type="submit">Search</button>
            <button className="search__btn">Current location</button>
        </form>
        <p>Temperature in {city} is {weather.temperature}</p>
        <p>Humiditi in {city} is {weather.humidity}</p>
        <p>Wind in {city} is {weather.wind}</p>
        <p>Weather in {city} is {weather.description}</p>
        <img src={weather.icon} alt="weather"/>
    </div>
    );

}