import React from 'react';
import './App.css';

import Header from './screens/header/header'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Router/>
      </div>
    );
  }
}

export default App;
