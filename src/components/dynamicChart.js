import axios from "axios";
import React, { useState, useEffect } from "react";
// import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import "./chartstyle.css";

export const DynamicChart = () => {
  const [chartData, setChartData] = useState({});
  // console.log(chartData);
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log("axios response:", res);
        for(const dataObj of res.data.data){
          empSal.push(parseInt(dataObj.employee_salary))
          empAge.push(parseInt(dataObj.employee_age))
        }
      })
      .catch((err) => {
        console.log("err:", err);
      });
    console.log('empSal:', empSal);
    console.log('empAge:', empAge);

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
