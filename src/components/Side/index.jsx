import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '@/routes'
import './index.scss'

export default () => (
	<div className="Side__container">
		<div className="Side__nav">
			{routes
				.filter((route) => route.content)
				.map((route) => (
					<NavLink
						key={route.path}
						exact={route.exact}
						to={route.path}
						className="Side__nav-item"
					>
						<i className="icon icon-dashboard" />
						{route.content}
					</NavLink>
				))}
		</div>
		<div className="Side__history">
			<h3 className="Side__history-title">友链</h3>
			<ul className="Side__history-content">
				{[...new Array(10)].map((e, i) => (
					<li key={i}>
						<a href="void(0)">2e23e2e03/Acceptance_test</a>
					</li>
				))}
			</ul>
		</div>
	</div>
)
