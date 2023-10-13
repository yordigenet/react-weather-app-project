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
      teperature: response.data.temperature.current,
      discription: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=9e83f4b20abcaf3tc8ob7e37014fe983`;
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