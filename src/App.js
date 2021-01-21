import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';

import Home from './Pages/Home'

function App() {
  return (
    <div>
       <Router basename="/alarm-online"> 
        <Route path="/" exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
