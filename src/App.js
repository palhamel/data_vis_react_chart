import React from "react";
import "./App.css";
import { Chartcolor } from "./components/colorChart";
import { LineChart } from "./components/lineChart";

function App() {
  return (
    <div>
      <h1>Data visualization with React</h1>
      <Chartcolor />
      <LineChart />
    </div>
  );
}

export default App;
