import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai,androidstudio } from 'react-syntax-highlighter/dist/styles';
export default class ReactRouterDom extends React.Component{
  constructor(){
    super();
    this.state = {
      language:"",
      style:androidstudio,
      showLineNumbers: true,
    }
  }
  render(){
    return(
      <h1>React-router-dom</h1>
    )
  }
}