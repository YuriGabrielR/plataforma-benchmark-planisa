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
    LinearScale,
  )
  
  const fakeData = {
    labels: ['Argentina', 'Brasil'],
    datasets: [
      {
        label: 'Casos Confirmados',
        data: [1000, 2000],
        backgroundColor: ['rgba(54, 162, 235 1'],
        borderWidth: 1,
      },
    ],
  }
  
  export const GraficoBarra = () => {
    const options = {}
    return <Bar options={options} data={fakeData} />
  }
  