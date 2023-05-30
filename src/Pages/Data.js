import React from "react";
import Render from "./Render"

export default function Data(){
    const data=[{
        name:"G.Selva Kumar",
        age:23,
        course:"ECE",
        college:"PSG College of Technology"
    },{
        name:"T.Nishanth Kumar",
        age:20,
        course:"ECE",
        college:"PSG College of Technology"
    },{
        name:"A.Deepak Appa Rao",
        age:22,
        course:"ECE",
        college:"PSG College of Technology"
    },{
        name:"KS.Chandeesh",
        age:22,
        course:"ECE",
        college:"PSG College of Technology"
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