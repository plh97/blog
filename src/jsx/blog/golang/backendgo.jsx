import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties,xcode } from "react-syntax-highlighter/dist/styles";
import { Row, Col } from 'antd';

export default class backendgo extends React.Component {
  constructor() {
    super();
    this.state = {
      language: '',
      style: tomorrowNightEighties,
      showLineNumbers: true
    };
  }
  render() {
    const showLineNumbers = this.state.showLineNumbers;
    const language = this.state.language;
    const style = this.state.style;
    return (
      <Col span={24}>
        <h3>Go catch me</h3>
      </Col>
    )
  }
}
