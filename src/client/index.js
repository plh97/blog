import React from 'react'
import ReactDOM from 'react-dom'
import Root from "./jsx/Root.jsx"
import './less/index.less'
// const ghPages = require('gh-pages');

console.log(123);
// ghPages.publish('dist', {
//   // branch: 'master',
//   repo: 'https://github.com/pengliheng/pengliheng.github.io'
// }, (e)=>{
//   console.log('success publish',e);
// });

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
