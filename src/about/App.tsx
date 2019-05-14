import * as React from 'react';
import { connect } from 'react-redux';
import AboutMe from 'about/components/AboutMe';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <AboutMe>11111</AboutMe>
      </div>
    )
  }
}
