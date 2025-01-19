import React from 'react'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DountChart from './DountChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AreaChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Asia",
            data: [30, 50, 80, 120, 150, 60, 80, 110, 140, 100, 90, 130],
            borderColor: "#22C55E", // Tailwind green-500
            backgroundColor: "rgba(34, 197, 94, 0.2)", // Tailwind green-500 with opacity
            tension: 0.4,
            fill: true,
          },
          {
            label: "America",
            data: [50, 60, 70, 90, 100, 120, 140, 110, 80, 60, 50, 90],
            borderColor: "#FACC15", // Tailwind yellow-500
            backgroundColor: "rgba(250, 204, 21, 0.2)", // Tailwind yellow-500 with opacity
            tension: 0.4,
            fill: true,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#374151", // Tailwind gray-700
              font: {
                size: 14,
              },
            },
          },
          title: {
            display: true,
            text: "Area Installed (+43%) than last year",
            color: "#1F2937", // Tailwind gray-800
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#4B5563", // Tailwind gray-600
            },
          },
          y: {
            ticks: {
              color: "#4B5563", // Tailwind gray-600
            },
            beginAtZero: true,
          },
        },
      };

      
  return (
    <div className='flex'>
      <div>
         <DountChart/>
      </div>
      <div className="w-full max-w-3xl h-[380px] mx-auto  p-6 bg-white shadow-md rounded-lg">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default AreaChart




