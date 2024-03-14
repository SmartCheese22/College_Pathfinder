import React from 'react';
import { Bar } from 'react-chartjs-2';

const PlacementChart = ({ placementData }) => {
  if (!placementData || placementData.length === 0) {
    return <div>Loading...</div>; // Display loading message when placementData is undefined or empty
  }

  const data = {
    labels: placementData.map(dataPoint => dataPoint.department),
    datasets: [{
      label: 'Placement Percentage',
      data: placementData.map(dataPoint => dataPoint.placementPercentage),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Average Salary',
      data: placementData.map(dataPoint => dataPoint.averageSalary),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }],
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };

  return (
    <div>
      <h2>Placement Data by Department</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PlacementChart;
