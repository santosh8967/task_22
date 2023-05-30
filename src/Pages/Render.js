import React from "react";
import "../styles/render.css";

export default function Render({details}){
    return (
    <div className="rectangle">
            <h3>Name: {details.name}</h3>
            <h3>Age: {details.age}</h3>
            <h3>Branch:{details.course}</h3>
            <h3>College:{details.college}</h3>
    </div>)
}