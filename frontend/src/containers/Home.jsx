import React, { useEffect } from "react"

//components
import PageLayout from '../components/PageLayout';
import Tasks from "../components/Tasks"

//hooks
import useApplicationData from "../components/hooks/useApplicationData"

const HomePage = () => {
  const { state, fetchData } = useApplicationData()
  const { projectsList, tasksList} = state;
  console.log(state)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <PageLayout>
      <header>
        <h1>Tasks</h1>
      </header>

      <section className="project-page">
        <Tasks projectsList={projectsList} tasksList={tasksList}/>
      </section>
    </PageLayout>
  )
};

export default HomePage;
