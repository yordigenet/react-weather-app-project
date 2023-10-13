import React from "react"

export default function RealLifeDate(props){
let Days =[ "Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"]


    let day = Days[props.date.getDay()];
    let hour = props.date.getHours();
    if(hour < 10){
        hour = `0${hour}`
    }
    let minutes = props.date.getMinutes();
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    return (<div> {day} {hour}:{minutes}</div>);
}