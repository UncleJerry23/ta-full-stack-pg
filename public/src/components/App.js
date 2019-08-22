import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import './appStyle.css';
import NavBar from '../components/nav/NavBar';
import Splash from './splash/Splash';

export default function App() {
  return (
    <Router >
    <NavBar />
    <Switch>
      <Route exact path="/" component={Splash} />
      {/* <Route path="/search/:searchTerm" component={ErrContainer} />
      <Route path="/newErr" component={NewErr} />
      <Route path="/displayErr/:errId" component={DisplayError} /> */}
    </Switch>
  </Router>
  );
}
  