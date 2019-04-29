import React from 'react';

import styles from './App.css';

import Header from './screens/header/header';
import Router from './router/router';

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.body}>
          <Router/>
        </div>
      </div>
    );
  }
}

export default App;
