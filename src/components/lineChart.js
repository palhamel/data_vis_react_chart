import React, { useEffect } from "react";
import Chart from "chart.js";
import "./chartstyle.css";

export const LineChart = () => {
  useEffect(() => {
    // Our labels along the x-axis
    const years = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
    // For drawing the lines
    const africa = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
    const asia = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
    const europe = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734];
    const latinAmerica = [40, 20, 10, 16, 24, 38, 74, 167, 508, 784];
    const northAmerica = [6, 3, 2, 2, 7, 26, 82, 172, 312, 433];

    const ctx = document.getElementById("lineChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: years,
        datasets: [
          {
            data: africa,
            label: "Africa",
            borderColor: "#a4b46b",
            fill: false,
          },
          {
            data: asia,
            label: "Asia",
            borderColor: "#899097",
            fill: false,
          },
          {
            data: europe,
            label: "Europe",
            borderColor: "#61735a",
            fill: false,
          },
          {
            data: latinAmerica,
            label: "Latin America",
            borderColor: "#5d5040",
            fill: false,
          },
          {
            data: northAmerica,
            label: "North America",
            borderColor: "#ffc90a",
            fill: false,
          },
        ],
      },
    });
  });
  return (
    <div className="chart-wrapper">
      <h2>World population</h2>
      <h3>Number of people on earth - last 500 years</h3>
      <canvas id="lineChart" width="400" height="400" />
    </div>
  );
};