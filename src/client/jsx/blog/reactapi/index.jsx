import React from 'react';
import { Menu } from 'antd';
import NoMatch from '../404/index.jsx';
import { Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
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
import './index.less';

const { Item } = Menu;
export default class ReactAPI extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="reactapi">
        <div className="sider">
          <Menu
            defaultSelectedKeys={[String(location.pathname.split('/')[2])]}
          >
            <Item key="undefined">
              <Link to={match.path}>介绍 JSX</Link>
            </Item>
            <Item key="renderElement">
              <Link to={`${match.path}/renderElement`}>渲染元素</Link>
            </Item>
            <Item key="componentsProps">
              <Link to={`${match.path}/componentsProps`}>Components & props</Link>
            </Item>
            <Item key="stateCycle">
              <Link to={`${match.path}/stateCycle`}>State & 生命周期</Link>
            </Item>
            <Item key="handleEvent">
              <Link to={`${match.path}/handleEvent`}>处理事件</Link>
            </Item>
            <Item key="conditionRender">
              <Link to={`${match.path}/conditionRender`}>根据条件来渲染</Link>
            </Item>
            <Item key="listKey">
              <Link to={`${match.path}/listKey`}>列表和Key</Link>
            </Item>
            <Item key="form">
              <Link to={`${match.path}/form`}>表格</Link>
            </Item>
            <Item key="livingStateUp">
              <Link to={`${match.path}/livingStateUp`}>状态提升</Link>
            </Item>
            <Item key="compositionInheritance">
              <Link to={`${match.path}/compositionInheritance`}>Composition和Inheritance</Link>
            </Item>
            <Item key="thinking">
              <Link to={`${match.path}/thinking`}>思考React</Link>
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
  }
}
