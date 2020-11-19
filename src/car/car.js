import React from "react";

const Car = (props) => {
    return (
        <div>
            <h1>Car name: {props.name}, {props.model}</h1>
            <p>{props.description}</p>
            <h2>Year: {props.year}</h2>
            <button>Click</button>
        </div>
    )
};
export default Car;