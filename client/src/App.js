import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';
import Main from './pages/Main';
import Login from './pages/login/Login';
import DefaultPageTemplate from './conponents/templates/page/DefaultPageTemplate';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main}/>
      <Route path="/login" component={Login}/>
    </Router>
  );
}

export default App;