// package
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
// local
import Layout from './components/Layout'
import store from './store'
import HomePage from './views/Home';
import ArticlePage from './views/Article';
import DetailPage from './views/Detail/index';
import ComponentPage from './views/Component';
import ProjectPage from './views/Project';
// main
export default () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path = "/" component={HomePage} />
        <Route path="/detail" component = {DetailPage}/>
        <Route path="/article" component={ArticlePage} />
        <Route path="/component" component={ComponentPage} />
        <Route path="/project" component={ProjectPage} />
      </Layout>
    </Router>
  </Provider>
);
