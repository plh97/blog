// package
import React, { Suspense, lazy, Component } from 'react'
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { FETCH_PENDING, FETCH_REJECT, FETCH_RESOLVE } from '@/redux-relate/constant/http'

// local
import routes from '@/routes'
import Loading from '@/components/Loading'
import { fetchUserSaga } from '@/redux-relate/actions/request'
const Layout = withRouter(lazy(() => import('@/components/Layout')))

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

const mapStateToProps = ({ httpReducer }) => ({ httpReducer })
// main
@connect(mapStateToProps, { fetchUserSaga })
export default class App extends Component {
	componentDidMount() {
		this.props.fetchUserSaga()
	}
	render() {
		const { httpStatus, message } = this.props.httpReducer
		return (
			<Router>
				<Suspense fallback={<Loading text="页面玩命加载中..." />}>
					<Layout>
						{httpStatus === FETCH_REJECT && <div> 请求出错了 \n {message} </div>}
						{httpStatus === FETCH_RESOLVE && <Content />}
						{httpStatus === FETCH_PENDING && <Loading text="正在请求数据..." />}
					</Layout>
				</Suspense>
			</Router>
		)
	}
}
