import React from "react";
import RealLifeDate from "./realLifeDate";

export default function SearchEngine(props) {
  return(
  <div><h1>{props.data.name}</h1>
  <ul>
      <li><RealLifeDate date={props.data.date}/></li>
      <li className="text-capitalize">{props.data.discription}</li>
  </ul>
  <div className="row">
      <div className="col-6">
          <div className="d-flex justify-content-start">     
          <img src={props.data.icon} alt={props.data.discription}></img> 
              <div><span className="temprature">{props.data.teperature}</span><span className="units">°C | °F</span></div>
      </div>
      </div>
   <div className="col-6"><ul>
      <li>Precipitation</li>
      <li>Humidity: {props.data.humidity}%</li>
      <li>Wind: {props.data.wind}km/h</li></ul>
      </div>
      </div>
      </div>);
}
  