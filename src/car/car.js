import React from "react";

const Car = (props) => {
    return (
        <div>
            <h1>Car name: {props.name}</h1>
            <h2>Year: {props.year}</h2>
        </div>
    )
};
export default Car;