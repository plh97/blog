const routes = [
	{
		path: '/',
		exact: true,
		icon: 'icon-desktop',
		content: '主页'
	},
	{
		path: '/article',
		icon: 'icon-th-list',
		exact: false,
		content: '文章'
	},
	{
		path: '/articleDetail',
		exact: false,
	},
	{
		path: '/repository',
		icon: 'icon-dashboard',
		exact: false,
		content: '仓库',
	},
	{
		path: '/repositoryDetail',
		icon: 'icon-dashboard',
		exact: false,
	},
	{
		path: null,
		icon: 'icon-coffee',
		exact: false,
	}
]
export default routes;