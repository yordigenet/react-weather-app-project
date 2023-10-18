import React, { useState } from "react";
import "./weatherForcast.css";
import axios from "axios";
import WeatherForcastData from "./weatherForcastData";

export default function WeatherForcast(props){
let [forcastready, setForcastready] = useState(false);
let [forcastdata, setForcastdata] = useState(null);
function handleResponse(response){
    setForcastdata(response.data.daily);
    setForcastready(true);
}
  
if (forcastready){
    console.log(forcastdata)
    
    return(
        <div className="forcast">
            <div className="row">
                {forcastdata.map(function (dailyForcast, index){
                    if (index <= 5){
                 return(<div className="col-2" key={index}>
                    <WeatherForcastData data={dailyForcast}/>
                </div> ); } 
                })}
                
            </div>
            
        </div>
    );
   }
   
   else{
    let apiKey = "9e83f4b20abcaf3tc8ob7e37014fe983";
    let newcity = props.cordinates;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${newcity}&key=${apiKey}`;
    
    axios.get(url).then(handleResponse);

    return (null);
  }
}