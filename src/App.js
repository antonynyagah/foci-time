import React from 'react';
import './App.css';
import Title from './components/title';
import NavBar from './components/navbar';
import Timer from './components/timer';
import BreakTimer from './components/breaktimer'

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Timer />
      <BreakTimer />
    </div>
  );
}

export default App;