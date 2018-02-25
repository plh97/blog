// application
import React from "react";
import {
	BrowserRouter as Router,
	Link,
} from "react-router-dom";
import { Menu, Icon } from 'antd';
import { Provider, observer } from "mobx-react";
import { Route, Redirect } from 'react-router';

// local
import store from "../store/";
import Home from "./blog/home/index.jsx";
import Life from "./blog/life/index.jsx";
import NoMatch from './blog/404/index.jsx';
import Render from "./feature/Render.js";
import Github from "./blog/github/index.jsx";
import Article from "./blog/article/index.jsx";
import Others from "./blog/others/index.jsx";
import ReactAPI from "./blog/reactapi/index.jsx";

@observer
export default class Root extends React.Component {
	state = {
		current: location.pathname == '/' ? 'home' : location.pathname.split('/')[1],
	}
	handleClick = (e) => {
		this.setState({
			current: e.key,
		});
	}
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="layout">
						<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
							<Menu.Item key="home">
								<Link to='/'>🏠Home</Link>
							</Menu.Item>
							<Menu.Item key="reactapi">
								<Link to='/reactapi'>⚛️React</Link>
							</Menu.Item>
							<Menu.Item key="github">
								<Link to='/github'>😇Github</Link>
							</Menu.Item>
							<Menu.Item key="article">
								<Link to='/article'>👿Article</Link>
							</Menu.Item>
							<Menu.Item key="life">
								<Link to='/life'>😋daily diary</Link>
							</Menu.Item>
							<Menu.Item key="chatroom">
								<a target='_blank' href='https://chat.pipk.top/group/Moonlight'>
									<span style={{ color: 'black' }}>🔥</span>
									chat with me?
								</a>
							</Menu.Item>
							<Menu.Item key="me">
								<a target='_blank' href='https://hacknical.com/resume/r1peg776b?locale=zh'>
									<span style={{ color: 'black' }}>📃</span>
									我的简历
								</a>
							</Menu.Item>
							<Menu.Item key="others">
								<Link to='/others'>🐠others</Link>
							</Menu.Item>
							<Menu.Item key="github_iframe" style={{ float: "right" }}>
								<iframe
									frameBorder="0" scrolling="0" width="91px" height="20px"
									src="https://ghbtns.com/github-btn.html?user=pengliheng&repo=pengliheng.github.io&type=star&count=true" >
								</iframe>
							</Menu.Item>
						</Menu>
						<Render>
							<Route exact path="/" component={Home} />
							<Route path="/reactapi" component={ReactAPI} />
							{/* <Route path="/golang" component={GoLang} /> */}
							<Route path="/article" component={Article} />
							<Route path="/life" component={Life} />
							<Route path="/others" component={Others} />
							<Route component={NoMatch} />
						</Render>
					</div>
				</Router>
			</Provider>
		);
	}
}
