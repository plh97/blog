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
      <div>
        <h1>&nbsp;</h1>
        <h1>日后再写。</h1>
      </div>
    )
  }
}