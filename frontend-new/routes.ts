const routes = [
	{
		path: '/',
		exact: true,
		content: '主页'
	},
	{
		path: '/article',
		exact: false,
		content: '文章'
	},
	{
		path: '/articleDetail',
		exact: false,
	},
	{
		path: '/repository',
		exact: false,
		content: '仓库',
	},
	{
		path: '/repositoryDetail',
		exact: false,
	},
	{
		path: null,
		exact: false,
	}
]
export default routes;