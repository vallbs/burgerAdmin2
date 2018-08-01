import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './containers/Menu/Menu';
import Burgers from './containers/Burgers/Burgers';
import Ingredients from './containers/Ingredients/Ingredients';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Burgers />
        <Ingredients />
      </div>
    );
  }
}

export default App;
