import React, { useState } from "react";

export default function CurrentWeather(props) {
    return <p>The weather in {props.city} is {props.temperature}, humidity is {props.humidity}, wind is {props.wind} description is {props.description}</p>
}