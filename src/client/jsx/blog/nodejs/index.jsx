import React from "react";
import { Row, Col ,Menu, Icon , Layout  } from 'antd';
const {Header,Footer , Content,Sider } = Layout
const {Item} = Menu;
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Begin from './begin.jsx'

export default class GoLang extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Layout>
        <Row type='flex'>
          <Col xs={24} sm={24} md={6} lg={4} className='slide'>
              <Menu
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}>
                <Item key="1">
                  <Link to={match.path}>nodejs 初探</Link>
                </Item>
              </Menu>
          </Col>
          <Col xs={24} sm={24} md={18} lg={20}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Row className="container-context" type='flex' justify='center'>
                <Route exact path={match.path} component={Begin} />
              </Row>
            </Content>
          </Col>
        </Row>
      </Layout>
    );
  }
}
