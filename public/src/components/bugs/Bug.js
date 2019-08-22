import React from 'react';
import PropTypes from 'prop-types';
import styles from './bugStyles.css';

function Bug({bug}) {
  return (
    <div className={styles.bug}>
      <h3 className={styles.name}>{bug.name}</h3>
      <img className={styles['bug-img']} src={bug.image} alt={bug.name}/>
      <p className={styles.description}>{bug.description}</p>
      <p className={styles['dead-title']}>DEADLINESS</p>
      <span className={styles.deadliness}>{bug.deadliness}</span>
    </div>
  );
}

Bug.propTypes = {
  bug: PropTypes.object.isRequired
};

export default Bug;
