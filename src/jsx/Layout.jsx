import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
// import Blog1 from "./blog/Blog1.jsx";
import Blog2 from "./blog/Blog2.jsx";
import Cnode from "./blog/cnode.jsx";
// import Echarts from "./blog/echarts.jsx";
import MarkDown from "./blog/MarkDown.jsx";
import ReactAPI from "./blog/reactapi.jsx";
// import ReactRouterDom from "./blog/React-router-dom.jsx";
import { NavDropdown, MenuItem, Button, Navbar, Nav, NavItem } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

export default class Layout extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<header>
						<Navbar inverse>
							<Navbar.Header>
								<Navbar.Brand>
									<a target="_blank" href="https://pengliheng.github.io/blog/intro.html">Peng</a>
								</Navbar.Brand>
								<Navbar.Toggle />
							</Navbar.Header>
							<Navbar.Collapse>
								<Nav>
									<IndexLinkContainer to="/dist/">
										<NavItem eventKey={1}>React v15.6.1</NavItem>
									</IndexLinkContainer>
									<LinkContainer to="/dist/blog1">
										<NavItem eventKey={2}>Living Blog</NavItem>
									</LinkContainer>
									<LinkContainer to="/dist/markdown">
										<NavItem eventKey={3}>MarkDown</NavItem>
									</LinkContainer>
									<LinkContainer to="/dist/cnode">
										<NavItem eventKey={5}>cnode</NavItem>
									</LinkContainer>
									<NavItem target="_blank" eventKey={6} href="https://pengliheng.github.io/view/2048.html">2048</NavItem>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</header>
					<Route exact path="/dist/" component={ReactAPI} />
					<Route path="/dist/blog1" component={Blog1} />
					<Route path="/dist/markdown" component={MarkDown} />
					<Route path="/dist/cnode" component={Cnode} />
				</div>
			</Router>
		);
	}
}