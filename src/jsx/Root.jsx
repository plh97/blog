import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import {
  IndexLink
} from "react-router"
import Life from "./blog/life/index.jsx";
import Cnode from "./blog/cnode.jsx";
import ReactAPI from "./blog/reactapi/index.jsx";
import GoLang from "./blog/golang/index.jsx";
import Others from "./blog/others/index.jsx";
import { Menu, Icon,Layout } from 'antd';
import { Route, Redirect } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import NoFound from './views/404.jsx'
import Prismjs from "prismjs"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/line-highlight/prism-line-highlight.css"
import "prismjs/plugins/line-highlight/prism-line-highlight.js"
import "prismjs/Components/prism-jsx.js"
import "prismjs/Components/prism-json.js"
import "prismjs/Components/prism-nginx.js"
import "prismjs/Components/prism-go.js"
import "prismjs/Components/prism-git.js"
import "prismjs/Components/prism-vim.js"
const {Header,Footer,Content} = Layout
const history = createHistory()

export default class Root extends React.Component {
  componentWillMount(){
    location.pathname=='/' && history.push('/reactapi')
  }
  componentDidUpdate(){
    Prismjs.highlightAll()
  }
  state = {
    current: location.pathname == '/' ? 'reactapi' : location.pathname.split('/')[1],
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
	render() {
		return (
			<Router>
				<Layout className="layout">
          <Menu onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal">
            <Menu.Item key="reactapi">
              <Link to='/reactapi'>React API·英译</Link>
            </Menu.Item>
            <Menu.Item key="golang">
              <Link to='/golang'>Go Language</Link>
            </Menu.Item>
            <Menu.Item key="life">
              <Link to='/life'>闲情逸致</Link>
            </Menu.Item>
            <Menu.Item key="chatroom">
              <a target='_blank' href='https://chat.penlh.com'>我的聊天室</a>
            </Menu.Item>
            <Menu.Item key="others">
              <Link to='/others'>其他</Link>
            </Menu.Item>
            <Menu.Item key="github" style={{float:"right"}}>
              <iframe
          	    style={{marginLeft: "2px", marginBottom:"-5px"}}
          	    frameBorder="0" scrolling="0" width="91px" height="20px"
          	    src="https://ghbtns.com/github-btn.html?user=pengliheng&repo=pengliheng.github.io&type=star&count=true" >
          		</iframe>
            </Menu.Item>
          </Menu>
          <Content>
  					<Route path="/reactapi" component={ReactAPI} />
            <Route path="/golang" component={GoLang} />
  					<Route path="/life" component={Life} />
            <Route path="/others" component={Others} />
  					<Route component={NoFound} />
          </Content>
			  </Layout>
      </Router>
		);
	}
}
