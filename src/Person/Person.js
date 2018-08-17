import React from "react"
import "./Person.css"

const Person = (props) => {
    return <div className="person">
        <p onClick={props.click}>Hi i am {props.name}</p>
        <p>{props.children}</p>
        <input  type ="text" onChange={props.changed}></input>
    </div>
}

export default Person