import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { getRegionData } from '../Api/api';

const Donut = () => {
  const [chartData, setChartData] = useState({
    options: {
      series: [],
      chart: {
        width: 380,
        type: 'bar',
      },
      title: {
        text: 'Regional Data'
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
    series: [],
    labels: [],
  });

  useEffect(()=>{
    getRegionData()
    .then((response)=>{
      const country = Object.keys(response)
      const count = Object.values(response)
      setChartData(
        {
          options: {
            series: count,
            chart: {
              width: 380,
              type: 'bar',
            },
            labels: country,
            legend: {
              position: 'left',
            },
            responsive: [
              {
                breakpoint: 50,
                options: {
                  chart: {
                    width: 200,
                  },
                  legend: {
                    position: 'bottom',
                  },
                },
              },
            ],
          },
          series: count,
          labels: country,
        }
      )
    })
  },[])
  return (
    <div className="donut chart-layout">
      <Chart options={chartData.options} series={chartData.series} type="pie" width='500' />
    </div>
  );
};

export default Donut;
