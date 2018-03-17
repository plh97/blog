// package
import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
// local
import Menu from '../../feature/Menu/index.jsx';
import BackendGo from './backendgo.jsx';

const { Item } = Menu;


export default class GoLang extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <span className="sider">
          <Menu
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Item key="1">
              <Link to={match.path}>用GO撸一个后端</Link>
            </Item>
          </Menu>
        </span>
        <span className="content">
          <Switch>
            <Route exact path={match.path} component={BackendGo} />
          </Switch>
        </span>
      </div>
    );
  }
}
