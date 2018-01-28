import React from "react";
import {
	BrowserRouter as Router,
	Link,
	Switch,
} from "react-router-dom";
import {
	IndexLink
} from "react-router"
import Life from "./blog/life/index.jsx";
import ReactAPI from "./blog/reactapi/index.jsx";
import GoLang from "./blog/golang/index.jsx";
import NodeJs from "./blog/nodejs/index.jsx";
import Others from "./blog/others/index.jsx";
import { Menu, Icon, Layout } from 'antd';
import { Route, Redirect } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import NoMatch from './views/404.jsx'
import Render from "./feature/Render.js"
const { Header, Footer, Content } = Layout
const history = createHistory()
import axios from "axios";


export default class Root extends React.Component {
	componentWillMount() {
		location.pathname == '/' && history.push('/reactapi')
		document.ondragstart = () => false;

		// token
		// 728bfbb7bbf182639d82519e8add763c503ebd76 
		

		axios({
			url: `https://api.github.com/graphql`,
			method: 'post',
			headers: {
				'Authorization': "bearer 728bfbb7bbf182639d82519e8add763c503ebd76",
				'Content-Type': 'application/json'
			},
			data: {
				query: `
				{
					viewer {
						login
						repository(name:"pengliheng.github.io") {
							issue(number:2) {
								title
								labels(first:1) {
									totalCount
									edges{
										node{
											color
											name
										}
										}
									}
									bodyHTML
								}
							}
						}
					}
				`
			}
		}).then(response => {
			console.log('graphql response:', response.data);
		}).catch(err => {
			console.log('graphql error:', err);
		});
	}

// curl -H "Authorization: bearer 728bfbb7bbf182639d82519e8add763c503ebd76" -X POST -d " \
//  { \
//    \"query\": \"query { viewer { login }}\" \
//  } \
// " https://api.github.com/graphql















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
							<Link to='/reactapi'>React Tutorial·Translate</Link>
						</Menu.Item>
						<Menu.Item key="golang">
							<Link to='/golang'>GoLang</Link>
						</Menu.Item>
						<Menu.Item key="nodejs">
							<Link to='/nodejs'>NodeJs Diary</Link>
						</Menu.Item>
						<Menu.Item key="life">
							<Link to='/life'>life diary</Link>
						</Menu.Item>
						<Menu.Item key="chatroom">
							<a target='_blank' href='https://chat.pipk.top/group/Moonlight'><span style={{ color: 'black' }}>🔥</span>chat with me?</a>
						</Menu.Item>
						<Menu.Item key="me">
							<a target='_blank' href='https://hacknical.com/resume/r1peg776b?locale=zh'><span style={{ color: 'black' }}>😋</span>我的简历</a>
						</Menu.Item>
						<Menu.Item key="others">
							<Link to='/others'>others</Link>
						</Menu.Item>
						<Menu.Item key="github" style={{ float: "right" }}>
							<iframe
								frameBorder="0" scrolling="0" width="91px" height="20px"
								src="https://ghbtns.com/github-btn.html?user=pengliheng&repo=pengliheng.github.io&type=star&count=true" >
							</iframe>
						</Menu.Item>
					</Menu>
					<Render>
						<Route path="/reactapi" component={ReactAPI} />
						<Route path="/golang" component={GoLang} />
						<Route path="/nodejs" component={NodeJs} />
						<Route path="/life" component={Life} />
						<Route path="/others" component={Others} />
						<Route component={NoMatch} />
					</Render>
				</Layout>
			</Router>
		);
	}
}
