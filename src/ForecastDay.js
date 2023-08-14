import React from "react";

export default function ForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


        return days[day];
    }
    return (
        <div className="ForecastDay">
            <div className="Forecast__temp">
                <span className="Forecast__temp_max">
                    {Math.round(props.data.temp.max)} °C
                </span>
                <span className="Forecast__temp_min">
                    {Math.round(props.data.temp.min)} °C
                </span>
            </div>
            <div className="Forecast__day">{day()}</div>
            <img src={props.icon} className="Forecast__img" alt="weather" />
        </div>
    );
}