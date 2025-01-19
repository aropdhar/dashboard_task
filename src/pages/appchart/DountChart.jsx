import React from 'react'
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const DountChart = () => {
    const data = {
        labels: ["Red", "Green", "Yellow", "Blue"],
        datasets: [
          {
            data: [40, 30, 20, 10], // Adjust the values to represent data proportions
            backgroundColor: [
              "#EF4444", // Tailwind red-500
              "#22C55E", // Tailwind green-500
              "#FACC15", // Tailwind yellow-500
              "#3B82F6", // Tailwind blue-500
            ],
            borderWidth: 0, // Removes borders for a cleaner look
          },
        ],
      };
    
      const options = {
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            display: false, // Hide legend
          },
        },
        cutout: "80%", // Makes the chart a donut
      };
  return (
    <div>
        <div className="w-full max-w-lg h-[380px] mx-auto relative p-4 bg-white shadow-md rounded-lg text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Current Download</h2>
            <Doughnut data={data} options={options} />
            <div className="absolute left-0 top-[12%] inset-0 flex items-center justify-center">
                <p className="text-xl font-bold text-gray-800">
                Total <br />
                188,245
                </p>
            </div>
        </div>
    </div>
  )
}

export default DountChart
