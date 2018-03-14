import React from 'react';
import { Menu } from 'antd';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import EnvDeteriorate from './envDeteriorate.jsx';
import CurrencyDevaluation from './currencyDevaluation.jsx';
import RealEstate from './realEstate.jsx';
import Git from './git.jsx';
import Data from './Data.jsx';
import Imagination from './Imagination.jsx';
import './index.less';

const { Item } = Menu;

export default class Blog1 extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="life">
        <div className="sider">
          <Menu defaultSelectedKeys={[String(location.pathname.split('/')[2])]}>
            <Item key="undefined">
              <Link to={match.path}>Imagination</Link>
            </Item>
            <Item key="Data">
              <Link to={`${match.path}/data`}>Data 畅想</Link>
            </Item>
            <Item key="生存环境恶化">
              <Link to={`${match.path}/生存环境恶化`}>生存环境恶化</Link>
            </Item>
            <Item key="currencyDevaluation">
              <Link to={`${match.path}/currencyDevaluation`}>货币贬值</Link>
            </Item>
            <Item key="realEstate">
              <Link to={`${match.path}/realEstate`}>房地产</Link>
            </Item>
            <Item key="git">
              <Link to={`${match.path}/git`}>git使用篇</Link>
            </Item>
            <Item disabled key="blog">
              <Link to={`${match.path}/blog`}>博客搭建</Link>
            </Item>
          </Menu>
        </div>
        <div className="content">
          <Switch>
            <Route exact path={match.path} component={Imagination} />
            <Route path={`${match.path}/data`} component={Data} />
            <Route path={`${match.path}/生存环境恶化`} component={EnvDeteriorate} />
            <Route path={`${match.path}/currencyDevaluation`} component={CurrencyDevaluation} />
            <Route path={`${match.path}/realEstate`} component={RealEstate} />
            <Route path={`${match.path}/git`} component={Git} />
          </Switch>
        </div>
      </div>
    );
  }
}
