import React from "react";
import './App.css';
import Car from "./car/car";
import state from "./State/state";


let App = (props) => {
    return (
        <div className="App" style={{textAlign: 'left'}}>
            <h1>Lorem{state.pageTitle}</h1>
            {
                state.cars.map((car) => {
                    return (
                        <Car
                            name={car.name}
                            year={car.year}
                            description={car.description}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
