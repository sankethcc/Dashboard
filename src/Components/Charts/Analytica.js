import React from 'react'
import HorizontalBarChart from './HorizontalBarChart'
import Donut from './Donut'
import Line from './Line'
import Area from './Area'
import SparklineCharts from './SparklineCharts'
import { Box } from '@mui/material'

const Analytica = () => {
  return (
    <>
    <div className='chart-container'>
        <SparklineCharts />
      <Box sx={{display:'flex', gap:'20px',width:'100%', justifyContent:'space-between'}}>
        <Donut />
        <Area />
      </Box>
      <Box sx={{display:'flex', gap:'20px',width:'100%', justifyContent:'space-between'}}>
        <Line />
        <HorizontalBarChart />

      </Box>

    </div>

    </>
  )
}

export default Analytica