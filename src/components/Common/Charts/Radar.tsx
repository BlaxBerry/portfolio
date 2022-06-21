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

interface ChartDataType {
  data: ChartData<'radar'>
  options?: ChartOptions<'radar'>
}

const RadarChart = ({ data, options }: ChartDataType): JSX.Element => {
  return (
    <Radar
      data={data}
      options={{
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 4,
          },
        },
        ...options,
      }}
      redraw={true}
      width={300}
      height={300}
    />
  )
}

export default RadarChart
