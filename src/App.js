import React from "react";
import "./App.css";
import { Chartcolor } from "./components/colorChart";
import { DynamicChart } from "./components/dynamicChart";
import { LineChart } from "./components/lineChart";

function App() {
  return (
    <div>
      <h1>Data visualization with React</h1>
      <DynamicChart />
      <Chartcolor />
      <LineChart />
    </div>
  );
}

export default App;
