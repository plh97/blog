import { lazy } from 'react'
// import { withRouter } from 'react-router-dom'
// local
// const HomePage = withRouter(lazy(() => import('@/views/Home')))
// const ArticlePage = withRouter(lazy(() => import('@/views/ArticleList')))
// const RepositoryPage = withRouter(lazy(() => import('@/views/RepositoryList')))
// const ArticleDetailPage = withRouter(lazy(() => import('@/views/ArticleDetail')))
// const RepositoryDetailPage = withRouter(lazy(() => import('@/views/RepositoryDetail')))
// const PageNotFound = withRouter(lazy(() => import('@/components/PageNotFound')))
import HomePage from '@/views/Home'
import ArticlePage from '@/views/ArticleList'
import ArticleDetailPage from '@/views/ArticleDetail'
import RepositoryPage from '@/views/RepositoryList'
import RepositoryDetailPage from '@/views/RepositoryDetail'
import PageNotFound from '@/components/PageNotFound'
// import ProjectPage from '@/views/Project'

const routes = [
	{
		path: '/',
		exact: true,
		component: HomePage,
		content: '主页'
	},
	{
		path: '/article',
		exact: false,
		component: ArticlePage,
		content: '文章'
	},
	{
		path: '/articleDetail',
		exact: false,
		component: ArticleDetailPage
	},
	{
		path: '/repository',
		exact: false,
		content: '仓库',
		component: RepositoryPage
	},
	{
		path: '/repositoryDetail',
		exact: false,
		component: RepositoryDetailPage
	},
	{
		path: null,
		exact: false,
		component: PageNotFound
	}
]
export default routes;