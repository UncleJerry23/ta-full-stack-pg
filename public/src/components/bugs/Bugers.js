import React from 'react';
import PropTypes from 'prop-types';
import Bug from './Bug';
import styles from './bugsStyles.css';

function Bugers({ bugs }) {
  const bugCards = bugs.map((bug, i) => {
    return (
      <div key={i} >
        <Bug bug={bug} /> 
      </div>
    );
  });

  return (
    <div className={styles.bugers} >
      {bugCards}
    </div>
  );
}

Bugers.propTypes = {
  bugs: PropTypes.array.isRequired
};

export default Bugers;
