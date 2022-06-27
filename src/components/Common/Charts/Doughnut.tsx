import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface ChartType {
  data: ChartData<'doughnut'>
  options?: ChartOptions<'doughnut'>
}

export default function DoughnutChart({ data, options }: ChartType) {
  return <Doughnut data={data} options={options} />
}
