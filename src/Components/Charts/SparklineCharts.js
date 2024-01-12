import { Box } from "@mui/material";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const SparklineCharts = () => {
  const [chartData1, setChartData1] = useState({
    series: [{
      data: [20,30,40,60,22,16,55]
    }],
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.3,
    },
    yaxis: {
      min: 0
    },
    title: {
      text: '$424,652',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    subtitle: {
      text: 'Sales',
      offsetX: 0,
      style: {
        fontSize: '14px',
      }
    }
  });

  const [chartData2, setChartData2] = useState({
    series: [{
      data: [20,30,40,60,22,16,55]
    }],
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.3,
    },
    yaxis: {
      min: 0
    },
    title: {
      text: '$235,312',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    subtitle: {
      text: 'Expenses',
      offsetX: 0,
      style: {
        fontSize: '14px',
      }
    }
  });

  const [chartData3, setChartData3] = useState({
    series: [{
      data: [20,30,40,60,22,16,55]
    }],
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.3
    },
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    yaxis: {
      min: 0
    },
    title: {
      text: '$135,965',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    subtitle: {
      text: 'Profits',
      offsetX: 0,
      style: {
        fontSize: '14px',
      }
    }
  });

  const [chartData4, setChartData4] = useState({
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    chart: {
      type: 'line',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  });

  const [chartData5, setChartData5] = useState({
    series: [{
      data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    chart: {
      type: 'line',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  });

  const [chartData6, setChartData6] = useState({
    series: [43, 32, 12, 9],
    chart: {
      type: 'pie',
      width: 40,
      height: 40,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 1
    },
    tooltip: {
      fixed: {
        enabled: false
      },
    }
  });

  const [chartData7, setChartData7] = useState({
    series: [43, 32, 12, 9],
    chart: {
      type: 'donut',
      width: 40,
      height: 40,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 1
    },
    tooltip: {
      fixed: {
        enabled: false
      },
    }
  });

  const [chartData8, setChartData8] = useState({
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    chart: {
      type: 'bar',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  });

  const [chartData9, setChartData9] = useState({
    series: [{
      data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    chart: {
      type: 'bar',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  });

  const [chartData10, setChartData10] = useState({
    series: [45],
    chart: {
      type: 'radialBar',
      width: 50,
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '50%'
        },
        track: {
          margin: 0
        },
        dataLabels: {
          show: false
        }
      }
    }
  });

  const [chartData11, setChartData11] = useState({
    series: [53, 67],
    chart: {
      type: 'radialBar',
      width: 40,
      height: 40,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '50%'
        },
        track: {
          margin: 1
        },
        dataLabels: {
          show: false
        }
      }
    }
  });

  return (
    <Box sx={{display:'flex', gap:'20px',width:'100%', justifyContent:'space-between'}}>
      {/* Render each Chart component with its corresponding options */}
      <Chart  options={chartData1} series={chartData1.series} type="area" height={160} />
      <Chart  options={chartData2} series={chartData2.series} type="area" height={160} />
      <Chart  options={chartData3} series={chartData3.series} type="area" height={160} />

      {/* <Chart className='chart-layout' options={chartData4} series={chartData4.series} type="line" width={350}  />
      <Chart className='chart-layout' options={chartData5} series={chartData5.series} type="line" width={350}  />
      <Chart className='chart-layout' options={chartData6} series={chartData6.series} type="pie" width={350}  />
      <Chart className='chart-layout' options={chartData7} series={chartData7.series} type="donut" width={350}  />
      <Chart className='chart-layout' options={chartData8} series={chartData8.series} type="bar" width={350}  />
      <Chart className='chart-layout' options={chartData9} series={chartData9.series} type="bar" width={350}  />
      <Chart className='chart-layout' options={chartData10} series={chartData10.series} type="radialBar" width={350}  />
      <Chart className='chart-layout' options={chartData11} series={chartData11.series} type="radialBar" width={350}  /> */}
    </Box>
  );
};

export default SparklineCharts;
