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


const Reacts = ({ match }) => (
	<div>
		<ul>
			<li>
				<Link to={`${match.url}/reactapi`}>
					React API
				</Link>
			</li>
			<li>
				<Link to={`${match.url}/react-router-dom`}>
					React-router-dom
				</Link>
			</li>
		</ul>

		<Route path={`${match.url}/reactapi`} component={ReactAPI}/>
		<Route path={`${match.url}/react-router-dom`} component={ReactRouterDom}/>
	</div>
)

export default class Layout extends React.Component{
	render(){
		return(
			<Router>
				<div>
					<header>
						<nav class="navbar navbar-default">
							<div class="container">
								<div class="navbar-header">
								  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								    <span class="sr-only">Toggle navigation</span>
								    <span class="icon-bar"></span>
								    <span class="icon-bar"></span>
								    <span class="icon-bar"></span>
								  </button>
								  <a class="navbar-brand" href="#">Peng</a>
								</div>
								<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
									<ul class="nav navbar-nav">
										<li><Link to="/">Technology Blog</Link></li>
										<li><Link to="/blog1">Living Blog</Link></li>
										<li><Link to="/react">React</Link></li>
										<li><a href="view/intro.html">简历</a></li>
										<li><a href="view/2048.html">2048</a></li>
										<li><a href="view/xxoo.html">xxoo</a></li>
										<li><a href="zjdesign.html">正觉设计</a></li>
									</ul>
								</div>
							</div>
						</nav>
					</header>
					<audio src="https://pengliheng.github.io/mp3/callstar.mp3" preload></audio>
					<div class="container-context container">
						<Route exact path="/" component={Blog2}/>
						<Route path="/blog1" component={Blog1}/>
						<Route path="/react" component={Reacts}/>
					</div>
				</div>
			</Router>
		)
	}
}