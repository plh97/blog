import React, { Component } from 'react';
import './index.less';

export default class NotMatch extends Component {
  render() {
    return (
      <div className="noMatch">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    );
  }
}
