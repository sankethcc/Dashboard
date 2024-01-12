import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getRelevanceLikelihood } from "../Api/api";

const Area = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: '',
        data: []
      },
      {
        name: '',
        data: []
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      title: {
        text: 'Likelihood/Relevance'
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: []
      },
    }
  });
  useEffect(()=>{
    getRelevanceLikelihood()
    .then((response)=>{
      setChartData(
        {
          series: [
            {
              name: Object.keys(response)[1],
              data: response.likelihood
            },
            {
              name: Object.keys(response)[2],
              data: response.relevence
            }
          ],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: true
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              categories: response.categories
            },
          }
        }
      )
    })
  },[])

  return (
    <div className="mixed-chart chart-layout">
        <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        width="100%"
        height="100%"
        />
    </div>
  );
};

export default Area;
