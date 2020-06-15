import React from 'react';
import BarLineChart from "../components/BarLineChart"
import PieGraph from "../components/PieGraph"

//axios get for productivity
//example [hours productive, neutral/unknown, unproductive]
const productivity = [300, 50, 300];
//example [monday-friday]

const weeklyHoursOnline = [7, 4, 2, 6, 12, 4, 5]
const projectHours = [4, 2, 6, 1, 4, 5, 3]

const Analytics = () => (
  <>
    <header>
      <h1>Analytics Page</h1>
    </header>

    <section className="analytics-page">
      <BarLineChart weeklyHoursOnline={weeklyHoursOnline} projectHours={projectHours} />
      <PieGraph productivity={productivity} />
    </section>
  </>
);

export default Analytics;
