// package
import React from "react";
import { Menu } from 'antd';
import {
    Route,
    Link
} from "react-router-dom";
import {observer,inject} from "mobx-react"

// local
import './index.less';
import RouterComponent from './RouterComponent.jsx'
import Loading from "../../feature/Loading/index.jsx";

@inject("store")
@observer
export default class GoLang extends React.Component {
  render() {
    const { match, store } = this.props;
    const { article } = store;
    return (
      <div className="article">
        <div className='sider'>
          <Menu defaultSelectedKeys = {['1']}>
            { article && article.map((art,i)=>(
              <Menu.Item key={i+1}>
                <Link to={
                  `${match.path}/${art.node.labels.nodes[0].name}`
                }>{art.node.title}</Link>
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
          <Route key={i} path={`${match.path}/${art.node.labels.nodes[0].name}`} render={()=>(
            <RouterComponent index={i}/>
          )} />
        ))}
      </div>
    );
  }
}
