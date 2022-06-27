import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

interface ChartType {
  data: ChartData<'radar'>
  width: number
  height: number
  redraw?: boolean
  options?: ChartOptions<'radar'>
}

const RadarChart = ({
  data,
  options,
  height,
  width,
  redraw,
}: ChartType): JSX.Element => {
  return (
    <Radar
      data={data}
      options={options}
      redraw={redraw}
      width={width}
      height={height}
    />
  )
}

export default RadarChart
