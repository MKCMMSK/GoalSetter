import React, { useState, useEffect } from "react"
// import axios from "axios"

//components
import PageLayout from '../components/PageLayout';
// import Swipable from "../components/Swipable"
// import Tasks from "../components/Tasks"
// import MonthlyCalendar from "../components/Calendar"
// import SessionList from "../components/SessionList"
import WeekTaskView from "../components/WeekTaskView"

const sessions = [
  { id: 1, duration: '00:00:30', time_of_day: '2020-06-06 01:23:45-04', productivity: 'TRUE', site_id: 1 },
  { id: 2, duration: '01:00:30', time_of_day: '2020-06-06 02:23:45-04', productivity: 'FALSE', site_id: 2 },
  { id: 3, duration: '02:00:30', time_of_day: '2020-06-06 03:23:45-04', productivity: 'TRUE', site_id: 1 },
  { id: 4, duration: '00:10:30', time_of_day: '2020-06-07 04:23:45-04', productivity: 'TRUE', site_id: 4 },
  { id: 5, duration: '00:30:30', time_of_day: '2020-06-07 05:23:45-04', productivity: 'FALSE', site_id: 1 }
]

const ProjectPage = () => {
  // const [state, setState] = useState({});

  // const fetchData = (
  //   axios
  //     .get(`localhost:8000/sessions/${userId}`)
  //     .then(data => setState(data))
  //     .catch(error => console.log(error))
  // )

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <PageLayout>
      <header>
        <h1>Dashboad Page</h1>
      </header>
      
      <section className="dashboad-page">
        {/* <MonthlyCalendar /> */}
        {/* <SessionList sessions={sessions} /> */}
        <WeekTaskView/>
        {/* <Swipable  /> */}
      </section>
    </PageLayout>
  );
};

export default ProjectPage;
