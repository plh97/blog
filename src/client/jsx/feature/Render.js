import React from 'react';
import Prismjs from 'prismjs';
import { Switch } from 'react-router-dom';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-nginx';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-vim';

export default class Render extends React.Component {
  componentDidUpdate() {
    Prismjs.highlightAll();
  }
  render() {
    const { children } = this.props;
    return (
      <Switch>
        {children}
      </Switch>
    );
  }
}
