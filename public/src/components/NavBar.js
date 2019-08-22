import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navBarStyle.css';

function NavBar() {
  return(
    <section>
      <h2><Link to={'/'}>home</Link></h2>
      <h1><Link to={'/bugs'}>BUGS</Link></h1>
      <h2><Link to={'/newBug'}>newBug</Link></h2>
    </section>
  )
}

export default NavBar;
