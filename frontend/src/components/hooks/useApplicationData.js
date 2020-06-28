import { useEffect, useState } from "react"
import axios from "axios"
import qs from 'qs';

axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Vary'] = 'Accept, Origin, Cookie';
axios.defaults.headers.get['Allow'] = 'GET, HEAD, OPTIONS';
axios.defaults.headers.get['Content-Length'] = '786';



export default function useApplicationData() {

  const [state, setState] = useState({
    projectsList: [],
    tasksList: [],
  })

  const fetchData = () => {

var data = JSON.stringify({"userId":1});
console.log(Object.getOwnPropertyNames(axios.defaults.headers.get));

return axios({
  method: 'get',
  url: 'http://localhost:8000/api/tasks/1/get_all_tasks/',
	// proxy: {
  //   host: '127.0.0.1',
  //   port: 8000
  // },
  // crossdomain: true,
    // 'Access-Control-Allow-Methods': 'GET, /PUT, POST, DELETE, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
    // 'Content-Length': 786,
    // 'Vary': 'Accept, Origin, Cookie',
    // 'Allow': 'GET, HEAD, OPTIONS',
    // 'X-Content-Type-Options': 'nosniff',    
    // 'Authorization': 'Bearer ' + 'ksdjfglksgflksgsjdhglaslfkhgasf',
  // },
  data : data
})

.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  //   axios({
  //     method: "get",
  //     url: `http://localhost:8000/api/projects/`,
  //     data: { "userId": 1 }, //TODO remove hardcoded data
  //   }).then(response => {
  //     var config = {
  //       method: 'get',
  //       url: 'http://localhost:8000/api/tasks/1/get_all_tasks/',
  //       headers: { 
  //         'Content-Type': 'application/json'
  //       },
  //       data : data
  //     };
      
  //     axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
      // axios.get(`http://localhost:8000/api/tasks/1/get_all_tasks/`, { userId: 1 }, {
        // headers: {"Content-Type": "application/json"},

      // })
      // axios({
      //   method: "get",
      //   url: `http://localhost:8000/api/tasks/1/get_all_tasks/`,
      //   // data: { "userId": 1 }, //TODO remove hardcoded data

      //   data: data,
      //   headers: {"Content-Type": "application/json"},
      //   maxContentLength: 2000,
        // // data: qs.stringify({ "userId": 1 }),
        // validateStatus: (status) => {
        //   return true; 
        // },
        // responseType: 'json',
        // responseEncoding: 'utf8',
    //   })
    //     .then(data => {
    //       // console.log(JSON.parse(data))
    //       setState({
    //         ...state,
    //         projectsList: response.data,
    //         tasksList: data.data
    //       })
    //     })
    //     .catch(error => console.log(error))
    // })
    //   .catch(error => error.stack)
  }
  // fetchData()

  return {
    state,
    fetchData
  }
}