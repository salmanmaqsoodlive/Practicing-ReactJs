import React, { Component } from 'react';
import Main from './components/Main/Main';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Toolbar />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
