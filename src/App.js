import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Title from './components/title';
import Timer from './components/timer';
import BreakTimer from './components/breaktimer';
import NoPage from "./nopage";
import Home from './home';
//import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Title/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/App">
            <Timer />
            <BreakTimer />
          </Route>
          <Route component={NoPage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
