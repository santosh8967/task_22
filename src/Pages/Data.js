import React from "react";
import Render from "./Render"

export default function Data(){
    const data=[{
        name:"santosh nigam",
        age:23,
        course:"ECE",
        college:"datta meghe college of engineering"
    },{
        name:"ashish dubey",
        age:20,
        course:"ECE",
        college:"datta meghe college of engineering"
    },{
        name:"ritik kadam",
        age:22,
        course:"ECE",
        college:"datta meghe college of engineering"
    },{
        name:"ramesh shah",
        age:22,
        course:"ECE",
        college:"datta meghe college of engineering"
    }]
    return(<div>
        <h1>The Task is Render Data from One Component to another Component</h1>
        {
            data && data.map((info,index)=>(
                <Render key={`Data-Information-${index}`} details={info}/>
            ))
        }
    </div>)
}