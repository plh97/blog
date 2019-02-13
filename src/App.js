// package
import React from 'react';
import {Route} from "react-router-dom";
import { Provider } from 'react-redux'
// local
import Layout from './components/Layout'
import store from './store'
import HomePage from './views/Home';
import ArticlePage from './views/Article';
import ArticleDetailPage from './views/Article/Detail';
import RepositoryPage from './views/Repository';
import RepositoryDetailPage from './views/Repository/Detail';
import ProjectPage from './views/Project';
import CustomBrowserRouter from './components/CustomBrowserRouter';
// main
export default () => (
  <Provider store={store}>
    <CustomBrowserRouter>
      <Layout>
        <Route exact path = "/" component={HomePage} />
        <Route path="/article" component={ArticlePage} />
        <Route path="/articleDetail" component={ArticleDetailPage} />
        <Route path="/repository" component={RepositoryPage} />
        <Route path="/repositoryDetail" component={RepositoryDetailPage}/>
        <Route path="/project" component={ProjectPage} />
      </Layout>
    </CustomBrowserRouter>
  </Provider>
);
