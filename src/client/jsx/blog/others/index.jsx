import React from 'react';
import { Menu } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';

import Nginx from './nginx.jsx';
import Vps from './Vps.jsx';
import SessionCookie from './SessionCookie.jsx';
import Array from './Array.jsx';
import './index.less';

const { Item } = Menu;

export default class Others extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="others">
        <div className="slide">
          <Menu
            defaultSelectedKeys={[String(location.pathname.split('/')[2])]}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            >
            <Item key="undefined">
              <Link to={match.path}>Nginx 初体验</Link>
            </Item>
            <Item key="vps">
              <Link to={`${match.path}/vps`}>Vps 港服初体验</Link>
            </Item>
            <Item key="sessionCookie">
              <Link to={`${match.path}/sessionCookie`}>Session && Cookie</Link>
            </Item>
            <Item key="array">
              <Link to={`${match.path}/array`}>Array && prototype</Link>
            </Item>
            <Item key="GraphQL">
              <Link to={`${match.path}/GraphQL`}>GraphQL</Link>
            </Item>
          </Menu>
        </div>
        <div className="content">
          <Switch>
            <Route exact path={match.path} component={Nginx} />
            <Route path={`${match.path}/vps`} component={Vps} />
            <Route path={`${match.path}/sessionCookie`} component={SessionCookie} />
            <Route path={`${match.path}/array`} component={Array} />
            <Route path={`${match.path}/GraphQL`} component={Array} />
          </Switch>
        </div>
      </div>
    );
  }
}
