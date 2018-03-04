// package
import React, { Component } from 'react';
import Chart from 'chart.js';

export default class reactChart extends Component {
  componentDidMount() {
    new Chart(this.canvas.getContext('2d'), {
      ...this.props,
    });
  }
  render() {
    return <canvas ref={(e) => { this.canvas = e; }} />;
  }
}
