import React from 'react';

//axios get for productivity
//example
const productivity = [300, 50, 300];

const Analytics = () => (
  <>
    <header>
      <h1>Analytics Page</h1>
    </header>

    <section className="analytics-page">
      <PieGraph productivity={productivity} />
    </section>
  </>
);

export default Analytics;
