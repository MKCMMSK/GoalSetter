import React from "react";
import { Chart } from '@bit/primefaces.primereact.chart';

const PieGraph = (props) => {
const {productivity} = props;

  const data = {
    labels: ['Hours Productive', 'Neutral/Unknown', 'Hours Unproductive'],
    datasets: [
      {
        data: productivity,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };
    return (
      <div style={{ width: 400 }}>
      <Chart type='pie' data={data} />
    </div>
    )
}

export default PieGraph