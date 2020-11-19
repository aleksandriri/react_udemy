import React from "react";
import './App.css';
import Car from "./car/car";
import state from "./State/state";

let App = (props) => {
    return (
        <div className="App" style={{textAlign: 'left'}}>
            <h1>Lorem{state.pageTitle}</h1>
            <Car name={state.cars[0].name} model={state.cars[0].model} year={state.cars[0].year} description={state.cars[0].description}/>
            <Car name={state.cars[1].name} year={state.cars[1].year}/>
            <Car name={state.cars[2].name} year={state.cars[2].year}/>
        </div>
    );
}

export default App;
