import React from "react"

export default function Weather(){
    return (
    <div className="weather">
        <h1>Addis Ababa</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="d-flex justify-content-start">     
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy"></img> 
                    <div><span className="temprature">6</span><span className="units">°C | °F</span></div>
            </div>
            </div>
         <div className="col-6"><ul>
            <li>Precipitation</li>
            <li>Humidity</li>
            <li>Wind</li></ul>
            </div>
            </div>
       
    </div>)
}