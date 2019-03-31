// package
import React, { Suspense, lazy, Component } from 'react'
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

// local
import { fetchUser } from '@/redux-relate/actions/request'
import catchErrorDecorator from '@/decorators/catchErrorDecorator'
import Loading from '@/components/Loading'
// import Layout from '@/components/Layout'
// import HomePage from '@/views/Home'
// import ArticlePage from '@/views/Article'
// import ArticleDetailPage from '@/views/Article/Detail'
// import RepositoryPage from '@/views/Repository'
// import RepositoryDetailPage from '@/views/Repository/Detail'
// import ProjectPage from '@/views/Project'
// import CustomBrowserRouter from '@/components/CustomBrowserRouter'
const Layout = withRouter(lazy(() => import('@/components/Layout')))
const HomePage = withRouter(lazy(() => import('@/views/Home')))
const ArticlePage = withRouter(lazy(() => import('@/views/ArticleList')))
const ArticleDetailPage = withRouter(lazy(() => import('@/views/ArticleDetail')))
const RepositoryPage = withRouter(lazy(() => import('@/views/RepositoryList')))
const RepositoryDetailPage = withRouter(lazy(() => import('@/views/RepositoryDetail')))

@catchErrorDecorator
class Content extends Component {
	render() {
		return (
			<>
				<Route exact path="/" component={HomePage} />
				<Route path="/article" component={ArticlePage} />
				<Route path="/articleDetail" component={ArticleDetailPage} />
				<Route path="/repository" component={RepositoryPage} />
				<Route path="/repositoryDetail" component={RepositoryDetailPage} />
			</>
		)
	}
}

// main
@connect(
	null,
	{
		fetchUser
	}
)
export default class App extends Component {
	componentDidMount() {
		this.props.fetchUser()
	}
	render() {
		return (
			<Router>
				<Suspense fallback={<Loading text="页面玩命加载中..." />}>
					<Switch>
						<Layout>
							<Content />
						</Layout>
					</Switch>
				</Suspense>
			</Router>
		)
	}
}
