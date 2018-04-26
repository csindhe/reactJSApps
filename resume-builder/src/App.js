import React, { Component } from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AppTemplate from './App.template';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return AppTemplate.call(this);
  }
}