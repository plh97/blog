// package
import React from "react";
import {
    Route,
    NavLink
} from "react-router-dom";
import {observer,inject} from "mobx-react"

// local
import './index.less';
import Menu from '../../feature/Menu/index.jsx';
import RouterComponent from './RouterComponent.jsx'
import Loading from "../../feature/Loading/index.jsx";

@inject("store")
@observer
export default class article extends React.Component {
  render() {
    const { match, store } = this.props;
    const { article } = store;
    return (
      <div className="article">
        <div className='sider'>
          <Menu defaultSelectedKeys = {['1']}>
            { article && article.map((art,i)=>(
              <Menu.Item exact key={i+1}>
                <NavLink exact to={
                  `${match.path}/${art.node.title}`
                }>{art.node.title}</NavLink>
              </Menu.Item>
            )) }
          </Menu>
        </div>
        <Route exact path={match.path} render={()=>(
          <RouterComponent index={0}/>
        )} />
        {article == '' ? (
          <div className="content markdown-body">
            <Loading/>
          </div>
        ) : article.map((art,i)=>(
          <Route key={i} path={`${match.path}/${art.node.title}`} render={()=>(
            <RouterComponent index={i}/>
          )} />
        ))}
      </div>
    );
  }
}
