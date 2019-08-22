import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import './appStyle.css';
import NavBar from '../components/nav/NavBar';
import Splash from './splash/Splash';
import Bugs from '../containers/Bugs';

export default function App() {
  return (
    <Router >
    <NavBar />
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/bugs" component={Bugs} />
    </Switch>
  </Router>
  );
}
  