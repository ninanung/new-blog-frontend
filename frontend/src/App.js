import React from 'react';
import './App.css';

import Header from './screens/header/header';
import Router from './router/router';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <Header />
        </div>
        <div className='App-body'>
          <Router/>
        </div>
      </div>
    );
  }
}

export default App;
