import React, { useState, useEffect } from "react"
// import axios from "axios"

//components
import PageLayout from '../components/PageLayout';
import BarLineChart from "../components/BarLineChart"
import PieGraph from "../components/PieGraph"

//axios get for productivity
//example [hours productive, neutral/unknown, unproductive]
const productivity = [300, 50, 300];
//example [monday-friday]

const weeklyHoursOnline = [7, 4, 2, 6, 12, 4, 5]
const projectHours = [4, 2, 6, 1, 4, 5, 3]

const AnalyticsPage = () => {

  const [state, setState] = useState({});

  // const fetchData = (
    // axios
    //   .get(`localhost:8000/events/${user.id}`)
    //   .then(data => setState(data))
    //   .catch(error => console.log(error))
  // )

  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <PageLayout>
      <header>
        <h1>Analytics Page</h1>
      </header>

      <section className="analytics-page">
        <BarLineChart weeklyHoursOnline={weeklyHoursOnline} projectHours={projectHours} />
        <PieGraph productivity={productivity} />
      </section>
    </PageLayout>
  )
};

export default AnalyticsPage;
