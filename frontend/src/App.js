import React from 'react';
import './App.css';

//components
import NavBar from "./components/Navigation"
import Swipable from "./components/Swipable"
import Tasks from "./components/Tasks"
import MonthlyCalendar from "./components/Calendar"
import Dragable from "./components/Dragable"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-body">

        <h1>Dashboad Page</h1>
        <section className="dashboad-page">
          <MonthlyCalendar />
          <Swipable  />
        </section>

        <h1>Project Page</h1>
        <section className="project-page">
          <Tasks />
          {/* <Dragable/> */}
        </section>

      </main>
    </div>
  );
}

export default App;
