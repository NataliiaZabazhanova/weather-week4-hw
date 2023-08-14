import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    let apiKey = "6e6ec494746b5229a9f2d526478c924c";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
      setLoaded(true);
    });
  }, [props.coord]);

  if (loaded) {
    const icon = `https://openweathermap.org/img/wn/${forecast[0].weather[0].icon}.png`;

    return (
      <div className="Forecast">
        <div className="Forecast__row">
          <ForecastDay data={forecast[0]} icon={icon} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
