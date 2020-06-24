import React from "react";
// import { Chart } from '@bit/primefaces.primereact.chart';

const BarLineChart = (props) => {
  const { weeklyHoursOnline, projectHours } = props;
//TODO map func for >1 project
  const data = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        type: 'line',
        label: 'Total Daily Hours',
        borderColor: '#2196F3',
        borderWidth: 2,
        fill: false,
        data: weeklyHoursOnline
      },
      {
        type: 'bar',
        label: 'Project 1',
        backgroundColor: '#4CAF50',
        data: projectHours,
        borderColor: 'white',
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Hourly Breakdown of the Week'
    },
    tooltips: {
      mode: 'index',
      intersect: true
    }
  };

  return (
    <div style={{ width: 500 }}>
      {/* <Chart type='bar' data={data} options={options} /> */}
    </div>
  )
}

export default BarLineChart