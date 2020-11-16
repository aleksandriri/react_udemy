import React from "react";
import './App.css';
import Car from "./car/car";

function App() {
    return (
        <div className="App" style={{textAlign: 'left'}}>
            <Car name={'Audi'} year={2010}/>
            <Car name={'BMW'} year={2007}/>
        </div>
    );
}

export default App;
