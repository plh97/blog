// application
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'mobx-react';
import '@pengliheng/github-report/lib/index.less';


// local
import Loading from './feature/Loading';
import store from '../store';
import Home from './blog/home';
import Life from './blog/life';
import NoMatch from './blog/404';
import Render from './feature/Render';
import Others from './blog/others';
import Menu from './feature/Menu/index';

import Article from './blog/article';
import ReactAPI from './blog/reactapi';

// application
const Github = Loadable({
  loader: () => import('./blog/github/index'),
  loading: Loading,
});
// const ReactAPI = Loadable({
//   loader: () => import('./blog/reactapi'),
//   loading: Loading,
// });
// const Article = Loadable({
//   loader: () => import('./blog/article'),
//   loading: Loading,
// });

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="layout">
            <Menu>
              <Menu.Item>
                <NavLink exact to="/">🏠Home</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/reactapi">⚛️React</NavLink>
              </Menu.Item>
              <Menu.Item key="github">
                <NavLink to="/github/pengliheng">😇Github</NavLink>
              </Menu.Item>
              <Menu.Item key="article">
                <NavLink to="/article">👿Article</NavLink>
              </Menu.Item>
              <Menu.Item key="life">
                <NavLink to="/life">😋daily diary</NavLink>
              </Menu.Item>
              <Menu.Item key="chatroom">
                <a target="_blank" href="https://chat.pipk.top/group/Moonlight">
                  <span style={{ color: 'black' }}>🔥</span>
                  chat with me?
                </a>
              </Menu.Item>
              <Menu.Item key="me">
                <a target="_blank" href="https://hacknical.com/resume/r1peg776b?locale=zh">
                  <span style={{ color: 'black' }}>📃</span>
                  我的简历
                </a>
              </Menu.Item>
              <Menu.Item key="others">
                <NavLink to="/others">🐠others</NavLink>
              </Menu.Item>
              <Menu.Item key="github_iframe" style={{ float: 'right' }}>
                <iframe
                  frameBorder="0"
                  scrolling="0"
                  width="91px"
                  height="20px"
                  src="https://ghbtns.com/github-btn.html?user=pengliheng&repo=pengliheng.github.io&type=star&count=true"
                />
              </Menu.Item>
            </Menu>
            <Render>
              <Route exact path="/" component={Home} />
              <Route path="/reactapi" component={ReactAPI} />
              <Route path="/github/:name" component={Github} />
              <Route path="/article" component={Article} />
              <Route path="/life" component={Life} />
              <Route path="/others" component={Others} />
              <Route component={NoMatch} />
            </Render>
            <footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
