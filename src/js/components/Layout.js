import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Blog1 from './blog/Blog1';
import Blog2 from './blog/Blog2';
import ReactAPI from './blog/reactapi';
import ReactRouterDom from './blog/React-router-dom';
import { NavDropdown,MenuItem, Button ,Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer , LinkContainer } from 'react-router-bootstrap';

export default class Layout extends React.Component{
	render(){
		return(
			<Router>
				<div>
					<header>
						<Navbar inverse fixedTop>
							<Navbar.Header>
								<Navbar.Brand>
									<a target="_blank" href="https://pengliheng.github.io/view/intro.html">Peng</a>
								</Navbar.Brand>
								<Navbar.Toggle />
							</Navbar.Header>
							<Navbar.Collapse>
								<Nav >
									<IndexLinkContainer to="/">
										<NavItem eventKey={1}>Technology Blog</NavItem>
									</IndexLinkContainer>
									<LinkContainer to="/blog1">
										<NavItem eventKey={2}>Living Blog</NavItem>
									</LinkContainer>
									<NavDropdown eventKey={3} title="React" id="basic-nav-dropdown">
										<LinkContainer to="/react/reactapi">
											<NavItem eventKey={3.1}>React</NavItem>
										</LinkContainer>
										<MenuItem divider />
										<LinkContainer to="/react/react-router-dom">
											<NavItem eventKey={3.2}>react-router-dom</NavItem>
										</LinkContainer>
									</NavDropdown>
									<NavItem target="_blank" eventKey={4} href="https://pengliheng.github.io/view/2048.html">2048</NavItem>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</header>
					<Route exact path="/" component={Blog2}/>
					<Route path="/blog1" component={Blog1}/>
					<Route path="/react/reactapi" component={ReactAPI}/>
					<Route path="/react/react-router-dom" component={ReactRouterDom}/>
				</div>
			</Router>
		)
	}
}