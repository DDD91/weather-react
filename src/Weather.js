import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
const [city, setCity] = useState("");
const [loaded, setLoaded] = useState(false);
const [weather, setWeather] = useState(null);

function displayWeather(response) {
    setWeather({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        description: response.data.weather[0].description
    });
    setLoaded(true);
}

function searchCity(event) {
    event.preventDefault();
    let apiKey = "b400b1685bd22eb253eb2ae184751958";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
} 

function changeCity(event) {
    setCity(event.target.value);
}

let form = (
    <form onSubmit={searchCity}>
        <input 
        type="search"
        placeholder="Enter a city here..."
        onChange={changeCity}
        />
        <button type="Submit">Search</button>
    </form>

);
if (loaded) {
    return (
        <div>
            {form}
            <ul>
                <li>Temperature: {Math.round(weather.temperature)}°C</li>
                <li>Weather description: {weather.description}</li>
                <li>Humidity:{weather.humidity}%</li>
                <li>Wind: {weather.wind}km/h</li>
                <li>
                    <img src={weather.icon} alt={weather.description} />
                </li>
            </ul>
        </div>
    );
} else {
return form;
}
<div>
<footer>
         <p className="text-center mt-5">
"This project was coded by Devanie Dawson, and it is "
<a href="https://github.com/DDD91/weather-react" target="_blank" rel="noreferrer">open-sourced</a> 😊
         </p>
       </footer>
</div>
}