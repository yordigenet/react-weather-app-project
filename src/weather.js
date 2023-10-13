import React, { useState } from "react";
import axios from "axios";
import RealLifeDate from "./realLifeDate";

export default function Weather(props){
const [data, setData] = useState({ready: false});

function handleResponse(response) {
    console.log(response.data)
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

  let form = (
    <form>
      <div className="row">
        <div className="col-9"><input className="form-control" type="search" placeholder="Enter a city..." autoFocus="on"/></div>
      <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
      </div> 
    </form>
  );

  if (data.ready){
    return (
    <div className="weather">
        {form}
        <h1>{data.name}</h1>
        <ul>
            <li><RealLifeDate date={data.date}/></li>
            <li className="text-capitalize">{data.discription}</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="d-flex justify-content-start">     
                <img src={data.icon} alt={data.discription}></img> 
                    <div><span className="temprature">{data.teperature}</span><span className="units">°C | °F</span></div>
            </div>
            </div>
         <div className="col-6"><ul>
            <li>Precipitation</li>
            <li>Humidity: {data.humidity}%</li>
            <li>Wind: {data.wind}km/h</li></ul>
            </div>
            </div>
       
    </div>);
}
else {
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=9e83f4b20abcaf3tc8ob7e37014fe983`;
    axios.get(url).then(handleResponse);
    return("Loading......");
        
    
}
}

