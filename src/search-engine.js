import React from "react";
import RealLifeDate from "./realLifeDate";
import Weatherunit from "./weatherunit";

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
              <div>
                <Weatherunit celcius={props.information.teperature}/>
                </div>
      </div>
      </div>
   <div className="col-6"><ul>
      <li>Humidity: {props.information.humidity}%</li>
      <li>Wind: {props.information.wind}km/h</li></ul>
      </div>
      </div>
      </div>);
}
  