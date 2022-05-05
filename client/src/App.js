import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [feet, setFeet] = React.useState(0);
  const [inches, setInches] = React.useState(0);
  const [cm, setCm] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [bmiType, setBmiType] = React.useState("metric_units");
  const [bmi, setBmi] = React.useState(0);

  const calculate = async () => {
    const res = await fetch(`/api?type=${bmiType}&feet=${feet}&inches=${inches}&cm=${cm}&weight=${weight}`)
    const data = await res.json();
    setBmi(data.bmi)
  }

  return (
    <div className="App">
      <h3>BMI Calculator</h3>
      <div className="select">
        <h5>Select BMI Calculation Type</h5>
        <select onClick={(e)=> setBmiType(e.target.value)}>
          <option value="metric_units">Metric Units</option>
          <option value="us_units">US Units</option>
        </select>
      </div>
      {bmiType === "metric_units" ? (
        <React.Fragment>
          <div className="section">
            <h4>Height</h4>
            Cm <input type="number" onChange={(e)=> setCm(e.target.value)}></input>
          </div>
          <div className="section">
            <h4>Weight</h4>
            Kg <input type="number"  onChange={(e)=> setWeight(e.target.value)}></input>
          </div>

          <div className="section">
            <button onClick={calculate}>Calculate</button>
          </div>

          <div className="section">
            BMI <input type="number" value={bmi}></input>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="section">
            <h4>Height</h4>
            Feet <input type="number" onChange={(e)=> setFeet(e.target.value)}></input>
            Inches <input type="number" onChange={(e)=> setInches(e.target.value)}></input>
          </div>
          <div className="section">
            <h4>Weight</h4>
            Pounds <input type="number" onChange={(e)=> setWeight(e.target.value)}></input>
          </div>

          <div className="section">
            <button onClick={calculate()}>Calculate</button>
          </div>

          <div className="section">
          BMI <input type="number" value={bmi}></input>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
