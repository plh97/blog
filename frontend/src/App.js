// package
import React, { Suspense, lazy, Component } from 'react'
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

// local
import routes from '@/routes'
import Loading from '@/components/Loading'
import { fetchUserSaga } from '@/redux-relate/actions/request'
import catchErrorDecorator from '@/decorators/catchErrorDecorator'
// import Layout from '@/components/Layout'
const Layout = withRouter(lazy(() => import('@/components/Layout')))

@catchErrorDecorator
class Content extends Component {
	render() {
		return (
			<Switch>
				{routes.map((route) => (
					<Route key={route.path} {...route} />
				))}
			</Switch>
		)
	}
}

// main
@connect(null, { fetchUserSaga })
export default class App extends Component {
	componentDidMount() {
		this.props.fetchUserSaga()
	}
	render() {
		return (
			<Router>
				<Suspense maxDuration={300} fallback={<Loading text="页面玩命加载中..." />}>
					<Layout>
						<Content />
					</Layout>
				</Suspense>
			</Router>
		)
	}
}
