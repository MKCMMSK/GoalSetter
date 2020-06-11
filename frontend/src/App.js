import React from 'react';
import './App.css';

//components
import NavBar from "./components/NavBar"
import Swipable from "./components/Swipable"
import Tasks from "./components/Tasks"
import MonthlyCalendar from "./components/Calendar"
import SessionList from "./components/SessionList"

const sessions = [
  { id: 1, duration: '00:00:30', time_of_day: '2020-06-06', productivity: 'TRUE', site_id: 1 },
  { id: 2, duration: '01:00:30', time_of_day: '2020-06-06', productivity: 'FALSE', site_id: 2 },
  { id: 3, duration: '02:00:30', time_of_day: '2020-06-06', productivity: 'TRUE', site_id: 1 },
  { id: 4, duration: '00:10:30', time_of_day: '2020-06-07', productivity: 'TRUE', site_id: 4 },
  { id: 5, duration: '00:30:30', time_of_day: '2020-06-07', productivity: 'FALSE', site_id: 1 }
]

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <NavBar />
      </nav>
      <MainContainer />
    </div>
  );
}

export default App;
