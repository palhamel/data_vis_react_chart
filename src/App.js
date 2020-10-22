import React from "react";
import "./App.css";
import { DynamicChart } from './components/dynamicChart'
// import { ChartjsChart } from "./components/chartjsChart";
// import { Chartcolor } from "./components/colorChart";
// import { LineChart } from "./components/lineChart";

function App() {
  return (
    <div>
      <h1>Data visualization with React</h1>
      <DynamicChart />
      {/* <ChartjsChart/>
      <Chartcolor />
      <LineChart /> */}
    </div>
  );
}

export default App;
