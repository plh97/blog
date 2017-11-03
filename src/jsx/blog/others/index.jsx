import React from "react";
import {Row, Col, Menu, Icon, Layout} from 'antd';
const {Header, Footer, Content, Sider} = Layout
const {Item} = Menu;
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Nginx from './nginx.jsx'
import Vps from './Vps.jsx'
// import Prismjs from "prismjs"
export default class Others extends React.Component {
  // componentDidUpdate(){
  //   Prismjs.highlightAll()
  // }
  render() {
    const {match} = this.props
    return (
      <Layout>
        <Row type='flex'>
          <Col xs={24} sm={24} md={6} lg={4} className='slide'>
            <Menu defaultSelectedKeys={[String(location.pathname.split('/')[2])]} style={{
              height: '100%',
              borderRight: 0
            }}>
              <Item key="undefined">
                <Link to={match.path}>Nginx 初体验</Link>
              </Item>
              <Item key="vps">
                <Link to={`${match.path}/vps`}>Vps 港服初体验</Link>
              </Item>
            </Menu>
          </Col>
          <Col xs={24} sm={24} md={18} lg={20}>
            <Content style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280
            }}>
              <Row className="container-context" type='flex' justify='center'>
                <Route exact path={match.path} component={Nginx}/>
                <Route path={`${match.path}/vps`} component={Vps} />
              </Row>
            </Content>
          </Col>
        </Row>
      </Layout>
    );
  }
}
