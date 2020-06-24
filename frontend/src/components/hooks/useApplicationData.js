import { useEffect, useState } from "react"
import axios from "axios"
import qs from 'qs';

// axios.defaults.headers.get['Content-Type'] = 'application/json';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Vary'] = 'Accept, Origin, Cookie';
// axios.defaults.headers.get['Allow'] = 'GET, HEAD, OPTIONS';



export default function useApplicationData() {

  const [state, setState] = useState({
    projectsList: [],
    tasksList: [],
  })

  const fetchData = () => {

    var data = JSON.stringify({ "userId": 1 });


    axios({
      method: "get",
      url: `/api/projects/`,
      data: { "userId": 1 }, //TODO remove hardcoded data; change to params
    })
      .then(response => {
        axios({
          method: 'get',
          url: '/api/tasks/1/get_all_tasks/',
          params: { "userId": 1 }, //TODO remove hardcoded data
          validateStatus: (status) => {
            return true;
          },
          responseType: 'json',
          responseEncoding: 'utf8',
        })
          .then(data => {
            setState({
              ...state,
              projectsList: response.data,
              tasksList: data.data
            })
          })
          .catch(error => console.log(error))
      })
      .catch(error => error.stack)
  }

  return {
    state,
    fetchData
  }
}