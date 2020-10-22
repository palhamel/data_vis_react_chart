import React, { useEffect } from "react";
import Chart from "chart.js";
import "./chartstyle.css";

export const Chartcolor = () => {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "#f38cda",
              "#71b8f5",
              "#f9d99d",
              "#8cefda",
              "#cc8bf6",
              "#f9b99d",
            ],
            borderColor: [
              "#f38cda",
              "#71b8f5",
              "#f9d99d",
              "#8cefda",
              "#cc8bf6",
              "#f9b99d",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  });
  return (
    <div className="chart-wrapper">
      <h2>Chart in color</h2>
      <canvas id="myChart" width="400" height="400" />
    </div>
  );
};
