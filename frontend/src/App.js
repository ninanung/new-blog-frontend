import React from 'react';

import './App.css';

import Header from './screens/header/header';
import Router from './router/router';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='app_header'>
          <Header />
        </div>
        <div className='app_body'>
          <Router/>
        </div>
      </div>
    );
  }
}

export default App;
