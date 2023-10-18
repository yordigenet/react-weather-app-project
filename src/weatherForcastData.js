import React from "react"

export default function WeatherForcastData(props){
    let icon = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;
    
    function forcastTempMax(){
        let temp = Math.round(props.data.temperature.maximum);
        return temp;
    }

    function forcastTempMin(){
        let temp = Math.round(props.data.temperature.minimum);
        return temp;
    }

    function formatedDay(){
        let date = new Date(props.data.time*1000);
        let day = date.getDay();
        let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

        return days[day];
    }

    return (
    <div>
<div className="forcastDay">
    {formatedDay()}</div>
    <div><img src={icon} alt={props.data.condition.icon}></img></div>
    <div className="forcastTemp">
        <span>{forcastTempMin()}°</span> 
        <span className="weatherForcast-temp-min">{forcastTempMax()}°</span>
        </div>
    </div>)
}