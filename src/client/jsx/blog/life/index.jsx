import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import EnvDeteriorate from './envDeteriorate.jsx';
import CurrencyDevaluation from './currencyDevaluation.jsx';
import RealEstate from './realEstate.jsx';
import Git from './git.jsx';
import Data from './Data.jsx';
import Imagination from './Imagination.jsx';
import Menu from '../../feature/Menu/index.jsx';
import './index.less';

const { Item } = Menu;

const Blog1 = ({ match }) => (
  <div className="life">
    <div className="sider">
      <Menu mode="column">
        <Item>
          <NavLink exact to={match.path}>Imagination</NavLink>
        </Item>
        <Item>
          <NavLink to={`${match.path}/data`}>Data 畅想</NavLink>
        </Item>
        <Item >
          <NavLink to={`${match.path}/生存环境恶化`}>生存环境恶化</NavLink>
        </Item>
        <Item >
          <NavLink to={`${match.path}/currencyDevaluation`}>货币贬值</NavLink>
        </Item>
        <Item >
          <NavLink to={`${match.path}/realEstate`}>房地产</NavLink>
        </Item>
        <Item>
          <NavLink to={`${match.path}/git`}>git使用篇</NavLink>
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
export default Blog1;
