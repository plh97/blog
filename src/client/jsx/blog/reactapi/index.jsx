import React from 'react';
import NoMatch from '../404/index.jsx';
import { Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

// local
import Jsx from './jsx.jsx';
import RenderElement from './renderElement.jsx';
import ComponentsProps from './componentsProps.jsx';
import StateCycle from './stateCycle.jsx';
import HandleEvent from './handleEvent.jsx';
import ConditionRender from './conditionRender.jsx';
import ListKey from './listKey.jsx';
import LivingStateUp from './livingStateUp.jsx';
import Form from './form.jsx';
import CompositionInheritance from './compositionInheritance.jsx';
import Thinking from './thinking.jsx';
import Menu from '../../feature/Menu/index.jsx';
import './index.less';

const { Item } = Menu;
const ReactAPI = ({ match }) => (
  <div className="reactapi">
    <div className="sider">
      <Menu mode="column">
        <Item key="undefined">
          <NavLink exact to={match.path}>介绍 JSX</NavLink>
        </Item>
        <Item key="renderElement">
          <NavLink to={`${match.path}/renderElement`}>渲染元素</NavLink>
        </Item>
        <Item key="componentsProps">
          <NavLink to={`${match.path}/componentsProps`}>Components & props</NavLink>
        </Item>
        <Item key="stateCycle">
          <NavLink to={`${match.path}/stateCycle`}>State & 生命周期</NavLink>
        </Item>
        <Item key="handleEvent">
          <NavLink to={`${match.path}/handleEvent`}>处理事件</NavLink>
        </Item>
        <Item key="conditionRender">
          <NavLink to={`${match.path}/conditionRender`}>根据条件来渲染</NavLink>
        </Item>
        <Item key="listKey">
          <NavLink to={`${match.path}/listKey`}>列表和Key</NavLink>
        </Item>
        <Item key="form">
          <NavLink to={`${match.path}/form`}>表格</NavLink>
        </Item>
        <Item key="livingStateUp">
          <NavLink to={`${match.path}/livingStateUp`}>状态提升</NavLink>
        </Item>
        <Item key="compositionInheritance">
          <NavLink to={`${match.path}/compositionInheritance`}>Composition和Inheritance</NavLink>
        </Item>
        <Item key="thinking">
          <NavLink to={`${match.path}/thinking`}>思考React</NavLink>
        </Item>
      </Menu>
    </div>
    <div className="content">
      <Switch>
        <Route exact path={match.path} component={Jsx} />
        <Route path={`${match.path}/renderElement`} component={RenderElement} />
        <Route path={`${match.path}/componentsProps`} component={ComponentsProps} />
        <Route path={`${match.path}/stateCycle`} component={StateCycle} />
        <Route path={`${match.path}/handleEvent`} component={HandleEvent} />
        <Route path={`${match.path}/conditionRender`} component={ConditionRender} />
        <Route path={`${match.path}/listKey`} component={ListKey} />
        <Route path={`${match.path}/form`} component={Form} />
        <Route path={`${match.path}/livingStateUp`} component={LivingStateUp} />
        <Route path={`${match.path}/compositionInheritance`} component={CompositionInheritance} />
        <Route path={`${match.path}/thinking`} component={Thinking} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </div>
);
export default ReactAPI;
