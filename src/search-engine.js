import React from "react";
import RealLifeDate from "./realLifeDate";

export default function SearchEngine(props) {
  return(
  <div><h1>{props.information.name}</h1>
  <ul>
      <li><RealLifeDate date={props.information.date}/></li>
      <li className="text-capitalize">{props.information.discription}</li>
  </ul>
  <div className="row">
      <div className="col-6">
          <div className="d-flex justify-content-start">     
          <img src={props.information.icon} alt={props.information.discription}></img> 
              <div><span className="temprature">{props.information.teperature}</span><span className="units">°C | °F</span></div>
      </div>
      </div>
   <div className="col-6"><ul>
      <li>Precipitation</li>
        <li>Humidity: {props.information.humidity}%</li>
      <li>Wind: {props.information.wind}km/h</li></ul>
      </div>
      </div>
      </div>);
}
  