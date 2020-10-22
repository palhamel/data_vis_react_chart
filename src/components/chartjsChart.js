import React, { useState, useEffect } from "react";
// import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import "./chartstyle.css";

export const ChartjsChart = () => {
  const [chartData, setChartData] = useState({});
  // console.log(chartData);
  
  const chart = () => {
    setChartData({
      labels: ["mon", "tue", "wed", "thu", "fri"],
      datasets: [
        {
          label: "the important label here",
          data: [33, 45, 11, 22, 77],
          backgroundColor: ["#fbb2c5"],
          borderWidth: 1,
          borderColor: ["#6669f7"],
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  },[]);
  
  return (
    <div className="chart-wrapper">
      <h2>Chart using react-chartjs-2</h2>
      <h3>Chart using react-chartjs-2</h3>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Name of this chart", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};
