import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './navBarStyle.css';

function NavBar() {
  return(
    <section className={styles['nav-bar']}>
      <h2><Link className={styles.linkers} to={'/'}>home</Link></h2>
      <h1><Link className={styles.linkers} to={'/bugs'}>BUGS</Link></h1>
      <h2><Link className={styles.linkers} to={'/newBug'}>newBug</Link></h2>
    </section>
  )
}

export default NavBar;
