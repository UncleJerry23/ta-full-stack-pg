import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Bugers from '../components/bugs/Bugers';
import bugs from '../../data/bug-seed';
import styles from './bugStyle.css';

class Bugs extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired

  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div className={styles['bug-container']}>
        <Bugers bugs={bugs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  });

  const mapDispatchToProps = (dispatch) => ({
    fetch() {
      // dispatch(getBugs());
    }
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Bugs);
