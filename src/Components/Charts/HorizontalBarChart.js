import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getPestleData } from "../Api/api";

const HorizontalBarChart = () => {

  const [options, setOptions] = useState({
    title: {
      text: 'Pestle Chart'
    },
    series: [],
    chart: {
      width: 380,
      type: 'donut'
    },
    labels: [],
  
    stroke: {
      width: 1,
    },
    legend: {
      position: 'right'
    },
  
  
  });
  useEffect(()=>{
    getPestleData()
    .then((response)=>{
      const sector = Object.keys(response)
        const count = Object.values(response)
        setOptions({
          ...options,series:count,labels:sector
        })
    })
  },[])
  return (
    <div className="horizontal-bar-chart chart-layout">
      <Chart options={options} series={options.series} type={options.chart.type} height={'100%'} width='100%' />
    </div>
  );
};

export default HorizontalBarChart;
