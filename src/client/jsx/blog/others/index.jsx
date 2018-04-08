import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Vps from './Vps';
import Nginx from './nginx';
import Array from './Array';
import SessionCookie from './SessionCookie';
import Menu from '../../feature/Menu/index';
import './index.less';

const { Item } = Menu;

const Others = ({ match }) => (
  <div className="others">
    <div className="sider">
      <Menu mode="column">
        <Item>
          <NavLink exact to={match.path}>Nginx 初体验</NavLink>
        </Item>
        <Item>
          <NavLink to={`${match.path}/vps`}>Vps 港服初体验</NavLink>
        </Item>
        <Item>
          <NavLink to={`${match.path}/sessionCookie`}>Session && Cookie</NavLink>
        </Item>
        <Item>
          <NavLink to={`${match.path}/array`}>Array && prototype</NavLink>
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
export default Others;
