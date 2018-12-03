import React from "react"

import './Person.css'

const Person = (props) => {
    return (
    <div className = "Person">
    <p onClick={props.click}>This is a person named {props.name}  and he is {props.age} years old!! , 
    His id no is : {(Math.random() * 45)}</p>
    <p>{props.children}</p>
    <input type = "text" onChange={props.changed} value={props.name} />
    </div>
    )

};

export default Person;