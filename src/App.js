import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={6} country="in" category="science"/>
      </div>
    );
  }
}