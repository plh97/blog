import React from 'react';
import Layout from './components/Layout'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import HomePage from './views/Home';
import ArticlePage from './views/Article';
import ComponentPage from './views/Component';
import ProjectPage from './views/Project';


export default () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route path="/" component={HomePage} />
        <Route path="/article" component={ArticlePage} />
        <Route path="/component" component={ComponentPage} />
        <Route path="/project" component={ProjectPage} />
      </Layout>
    </Router>
  </Provider>
);
