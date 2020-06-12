import React from 'react';
import './App.css';

//components
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <NavBar />
      </nav>
      <main className="container">
      </main>
    </div>
  );
}

export default App;
