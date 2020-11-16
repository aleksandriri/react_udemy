import React from "react";
import './App.css';
import Car from "./car/car";
import state from "./State/state";

let App = (props) => {
    return (
        <div className="App" style={{textAlign: 'left'}}>
            <Car name={state.cars[0].name} year={state.cars[0].year}/>
            <Car name={state.cars[1].name} year={state.cars[1].year}/>
        </div>
    );
}

export default App;
