import { useEffect, useState } from "react"
import axios from "axios"

export default function useApplicationData() {

  const [state, setState] = useState({
    projectsList: [],
    tasksList: [],
  })

  const fetchData = () => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/projects/`,
      data: { "userId": 1 }, //TODO remove hardcoded data
    }).then(response => {
      axios({
        method: "get",
        url: `http://localhost:8000/api/tasks/1/get_all_tasks/`,
        data: { "userId": 1 },
      })
        .then(data => {
          setState({
            ...state,
            projectsList: response.data,
            tasksList: data.data
          })
        })
        .catch(error => error.stack)
    })
      .catch(error => error.stack)
  }

  return {
    state,
    fetchData
  }
}