import axios from "axios";
import React, { useState, useEffect } from "react";
// import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import "./chartstyle.css";

export const DynamicChart = () => {
  const [chartData, setChartData] = useState({});
  // console.log(chartData);
  // const [employeeSalary, setEmployeeSalary] = useState([]);
  // const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    let empName = [];
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log("axios response:", res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
          empName.push(dataObj.employee_name);
        }
        setChartData({
          labels: empName,
          datasets: [
            {
              label: "Salary",
              data: empSal,
              backgroundColor: ["#FE5F55"],
              borderWidth: 1,
              borderColor: ["#FE5F55"],
            },
          ],
        });
      })
      .catch((err) => {
        console.log("err:", err);
      });
    // console.log("empSal & emgAge:", empSal, empAge);
    console.log('names:', empName);
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="chart-wrapper">
      <h2>Dyn chart</h2>
      <h3>Chart using Axios fetch external data from API</h3>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Name and salary", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
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
