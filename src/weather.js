import React, { useState } from "react";
import axios from "axios";
import SearchEngine from "./search-engine"
import WeatherForcast from "./weatherForcast";

export default function Weather(props){
const [data, setData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity)

function handleResponse(response) {
        setData({
            ready: true,
            teperature: Math.round(response.data.temperature.current),
            discription: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.time * 1000),
            name:response.data.city,
            icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
            });
        }

function searchValue(){
  
  let apiKey = "9e83f4b20abcaf3tc8ob7e37014fe983";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
    
}

function handleSubmit (event){
  event.preventDefault();
  searchValue();
}

function getCity(event){
  setCity(event.target.value);
}

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9"><input className="form-control" type="search" placeholder="Enter a city..." autoFocus="on" onChange={getCity}/></div>
      <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
      </div> 
    </form>
  );

  if (data.ready){
    return (
    <div className="weather">
        {form}
        <SearchEngine information={data}/>
        <WeatherForcast  cordinates={data.name}/>
        
       
    </div>);
}
else {
   searchValue(); 
    return("Loading......");   
}
}

