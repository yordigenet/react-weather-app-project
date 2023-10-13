import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [data, setData] = useState(null);

  function getCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    setData({
      teperature: response.data.main.temp,
      discription: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa09763d916df0424c840d55bfc2d2c9&units=metric`;
    axios.get(url).then(handleResponse);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <div className="row">
        <div className="col-9"><input className="form-control" type="search" placeholder="Enter a city..." onChange={getCity} autoFocus="on"/></div>
      <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
      </div> 
    </form>
  );

  if (data) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {data.teperature}°C</li>
          <li>Description: {data.discription}</li>
          <li>Humidity: {data.humidity}%</li>
          <li>Wind: {data.wind}km/h</li>
          <li>
            <img src={data.icon} alt={data.discription} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}