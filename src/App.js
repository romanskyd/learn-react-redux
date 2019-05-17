import {connect} from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import {loadIssues} from './actions';

class App extends Component {
  handleClick() {
    this.props.loadIssues();
  }
  render() {
    return (
      <div>
        <h1>Hello, world. {this.props.counter}</h1>
        <button onClick={::this.handleClick}>Load issues</button>
        <ul>
          {this.props.issues.map(issue => <li>{issue.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({counter: state.counter, issues: state.issues}),
  (dispatch) => bindActionCreators({loadIssues}, dispatch)
)(App);
