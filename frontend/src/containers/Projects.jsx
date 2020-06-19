import React, { useState, useEffect } from "react"
import axios from "axios"

//components
import PageLayout from '../components/PageLayout';
// import Swipable from "../components/Swipable"
// import Tasks from "../components/Tasks"
import MonthlyCalendar from "../components/Calendar"
// import SessionList from "../components/SessionList"
import WeekTaskView from "../components/WeekTaskView"

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);
const sessions = [
  { id: 1, duration: '00:00:30', time_of_day: '2020-06-06 01:23:45-04', productivity: 'TRUE', site_id: 1 },
  { id: 2, duration: '01:00:30', time_of_day: '2020-06-06 02:23:45-04', productivity: 'FALSE', site_id: 2 },
  { id: 3, duration: '02:00:30', time_of_day: '2020-06-06 03:23:45-04', productivity: 'TRUE', site_id: 1 },
  { id: 4, duration: '00:10:30', time_of_day: '2020-06-07 04:23:45-04', productivity: 'TRUE', site_id: 4 },
  { id: 5, duration: '00:30:30', time_of_day: '2020-06-07 05:23:45-04', productivity: 'FALSE', site_id: 1 }
]

const ProjectPage = () => {
  const classes = useStyles();

  const [state, setState] = useState({});

  const fetchProjects = () => {
      axios
        .get(`http://localhost:8000/api/projects/`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
  }
  fetchProjects()

  useEffect(() => {
    fetchProjects()
  }, [])

console.log(state)
  return (
    <PageLayout>
      <header>
        <h1>Dashboad Page</h1>
      </header>

      <section className="dashboad-page">
        <MonthlyCalendar />
        {/* <SessionList sessions={sessions} /> */}
        <WeekTaskView />
        {/* <Swipable  /> */}
        <div className={classes.root}>

          <Paper elevation={3} projects={state}>
            test
          </Paper>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectPage;
