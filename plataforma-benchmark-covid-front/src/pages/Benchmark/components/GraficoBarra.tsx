import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  Legend,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  LinearScale
)

interface GraficoBarraProps {
  labels: string[]; 
  data: number[]; 
  label: string; 
}

export const GraficoBarra = ({ labels, data, label }: GraficoBarraProps) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: ['#576A7A', '#587c9b'],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  }

  return <Bar options={options} data={chartData} />
}
