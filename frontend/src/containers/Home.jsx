import React, { useState, useEffect } from "react"
// import axios from "axios"

//components
import PageLayout from '../components/PageLayout';
import Tasks from "../components/Tasks"


const HomePage = () => {
  const [state, setState] = useState({});

  // const fetchData = () => {
    // return (
    //   axios
    //     .get(`localhost:8000/projects/${userId}`)
    //     .then(data => setState(data))
    //     .catch(error => console.log(error))
    // )
  // }

  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <PageLayout>
      <header>
        <h1>Tasks</h1>
      </header>

      <section className="project-page">
        <Tasks projects={state} />
      </section>
    </PageLayout>
  )
};

export default HomePage;
