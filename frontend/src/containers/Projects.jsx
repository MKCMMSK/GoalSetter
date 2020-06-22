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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
// const sessions = [
//   { id: 1, duration: '00:00:30', time_of_day: '2020-06-06 01:23:45-04', productivity: 'TRUE', site_id: 1 },
//   { id: 2, duration: '01:00:30', time_of_day: '2020-06-06 02:23:45-04', productivity: 'FALSE', site_id: 2 },
//   { id: 3, duration: '02:00:30', time_of_day: '2020-06-06 03:23:45-04', productivity: 'TRUE', site_id: 1 },
//   { id: 4, duration: '00:10:30', time_of_day: '2020-06-07 04:23:45-04', productivity: 'TRUE', site_id: 4 },
//   { id: 5, duration: '00:30:30', time_of_day: '2020-06-07 05:23:45-04', productivity: 'FALSE', site_id: 1 }
// ]

const ProjectPage = () => {
  const classes = useStyles();

  const [state, setState] = useState({ data: [] });

  const fetchProjects = () => {
    axios
      .get(`http://localhost:8000/api/projects/`)
      .then(response => setState(response))
      .catch(error => console.log(error))
  }

  const projects = state.data;

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
        {/* <Swipable  /> */}
        {projects.map((project) => (
          <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{project.name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <Typography >
                  {project.description}
                </Typography>
                <Typography>
                  Start date: {project.start_date}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        ))}
        <WeekTaskView />

      </section>
    </PageLayout >
  );
};

export default ProjectPage;
