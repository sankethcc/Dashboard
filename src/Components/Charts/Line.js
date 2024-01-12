import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getIntensity } from "../Api/api";

const Line = () => {

  const [chartData, setChartData] = useState(
    {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          name:'Intensity',
          categories:[],
        },
        title: {
          text: 'Intensity'
        },
        dataLabels: {
          enabled: false
        },
      },
      series: [
        {
          name: "Count",
          data: [],
        },
      ],
    }
  );
  useEffect(()=>{
    getIntensity()
    .then((response)=>{
      setChartData({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: response.categories,
          },
        },
        series: [
          {
            name: "Count",
            data: response.data,
          },
        ],
      })
    })
  },[])

  return (

        <div className="mixed-chart chart-layout">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="100%"
          />
        </div>

  );
};

export default Line;
