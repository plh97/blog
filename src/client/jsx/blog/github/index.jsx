// package
import React from 'react';
import Github from '@pengliheng/github-report';
import '@pengliheng/github-report/lib/index.less';
// import Github from './Github.jsx';


const GithubReport = ({ match }) => (<Github name={match.params.name === 'undefined' ? 'pengliheng' : match.params.name} />);


export default GithubReport;
