import React, { useState } from "react";

export default function Weatherunit(props){
    const [unit, setUnit] = useState("celcius")

    function convertToFahranite(event){
    event.preventDefault();
    setUnit("fahrenheitTemp")
}

function convertToCelcius(event){
    event.preventDefault();
    setUnit("celcius")
}

function fahrenheitTemp(){
    return(Math.round(((props.celcius * 9/5) + 32)));
}

    if (unit === "celcius"){
        return(
        <div className="weatherUnit">
            <span className="temprature">{props.celcius}
        </span><span className="units">°C | <a href="#section" onClick={convertToFahranite}>°F</a></span>
        </div>
    );}
   else {
    return (
        <div className="weatherUnit">
            <span className="temprature">{fahrenheitTemp()}
        </span><span className="units"><a href="#section" onClick={convertToCelcius}>°C</a> | °F</span>
        </div>
    );
   } 
}