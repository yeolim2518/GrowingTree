import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1
      }
    }
  }
};

const StaticChart = ({ data }) => {
  const [width, setWidth] = useState(document.querySelector('.admin-statics').clientWidth);
  const newData = {
    labels: data.map(({ date }) => date),
    datasets: [
      {
        label: '방문객',
        data: data.map(({ count }) => count),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        
      }
    ],
  };

  useEffect(() => {
    setWidth(document.querySelector('.admin-statics').clientWidth);
  }, [setWidth]);

  return (
    <Line height={220} width={width} options={options} data={newData} />
  )
};

export default StaticChart;
