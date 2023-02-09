import React, { Component } from 'react';
import styles from './style.less';

class Loading extends Component {
  render() {
    return (
      <>
        <div className={styles.loader}></div>
      </>
    );
  }
}

export default Loading;
