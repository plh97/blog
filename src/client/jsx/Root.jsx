// application
import React from "react";
import {
	BrowserRouter as Router,
	NavLink,
} from "react-router-dom";
import { Provider, observer,inject } from "mobx-react";
import { Route, Redirect } from 'react-router';
import Github from "./blog/github/index.jsx";

// local
import store from "../store/";
import Home from "./blog/home/index.jsx";
import Life from "./blog/life/index.jsx";
import NoMatch from './blog/404/index.jsx';
import Render from "./feature/Render.js";
import Article from "./blog/article/index.jsx";
import Others from "./blog/others/index.jsx";
import ReactAPI from "./blog/reactapi/index.jsx";
import Menu from './feature/Menu/index.jsx';

@observer
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="layout">
            <Menu>
              <Menu.Item>
                <NavLink exact to='/'>🏠Home</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to='/reactapi'>⚛️React</NavLink>
              </Menu.Item>
              <Menu.Item key="github">
                <NavLink to='/github/pengliheng'>😇Github</NavLink>
              </Menu.Item>
              <Menu.Item key="article">
                <NavLink to='/article'>👿Article</NavLink>
              </Menu.Item>
              <Menu.Item key="life">
                <NavLink to='/life'>😋daily diary</NavLink>
              </Menu.Item>
              <Menu.Item key="chatroom">
                <a target='_blank' href='https://chat.pipk.top/group/Moonlight'>
                  <span style={{ color: 'black' }}>🔥</span>
                  chat with me?
                </a>
              </Menu.Item>
              <Menu.Item key="me">
                <a target='_blank' href='https://hacknical.com/resume/r1peg776b?locale=zh'>
                  <span style={{ color: 'black' }}>📃</span>
                  我的简历
                </a>
              </Menu.Item>
              <Menu.Item key="others">
                <NavLink to='/others'>🐠others</NavLink>
              </Menu.Item>
              <Menu.Item key="github_iframe" style={{ float: "right" }}>
                <iframe
                  frameBorder="0" scrolling="0" width="91px" height="20px"
                  src="https://ghbtns.com/github-btn.html?user=pengliheng&repo=pengliheng.github.io&type=star&count=true" >
                </iframe>
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
            <footer></footer>
          </div>
        </Router>
      </Provider>
    );
  }
}
