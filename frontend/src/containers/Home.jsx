import React, { useState, useEffect } from "react"
import axios from "axios"

//components
import {PageLayout} from '../components/PageLayout';
// import Swipable from "../components/Swipable"
// import Tasks from "../components/Tasks"
// import MonthlyCalendar from "../components/Calendar"
import SessionList from "../components/SessionList"

const sessions = [
  { id: 1, duration: '00:00:30', time_of_day: '2020-06-06', productivity: 'TRUE', site_id: 1 },
  { id: 2, duration: '01:00:30', time_of_day: '2020-06-06', productivity: 'FALSE', site_id: 2 },
  { id: 3, duration: '02:00:30', time_of_day: '2020-06-06', productivity: 'TRUE', site_id: 1 },
  { id: 4, duration: '00:10:30', time_of_day: '2020-06-07', productivity: 'TRUE', site_id: 4 },
  { id: 5, duration: '00:30:30', time_of_day: '2020-06-07', productivity: 'FALSE', site_id: 1 }
]

const HomePage = () => {
  const [state, setState] = useState({});

  const fetchData = (
    axios
      .get(`localhost:8000/sessions/${user_id}`)
      .then(data => setState(data))
      .catch(error => console.log(error))
  )

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <PageLayout>
      <header>
        <h1>Dashboad Page</h1>
      </header>
      
      <section className="dashboad-page">
        {/* <MonthlyCalendar /> */}
        <SessionList sessions={sessions} />
        {/* <Swipable  /> */}
      </section>
    </PageLayout>
  );
};

export default HomePage;
