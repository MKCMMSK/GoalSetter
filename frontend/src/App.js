import React from 'react';
import './App.css';

//components
import Swipable from "./components/Swipable"
import Tasks from "./components/Tasks"
import NavBar from "./components/Navigation"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <Swipable className="App-component" />
        <Tasks className="App-component" />
      </body>
    </div>
  );
}

export default App;
