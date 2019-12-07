;(window.webpackJsonp = window.webpackJsonp || []).push([
	[6],
	{
		100: function(e, t, n) {
			'use strict'
			var a = n(1),
				r = n.n(a)
			t.a = (e) => (t) =>
				class extends t {
					componentDidMount() {
						document.title = e
					}
					render() {
						return r.a.createElement(t, null)
					}
				}
		},
		129: function(e, t, n) {
			var a = n(130)
			'string' == typeof a && (a = [[e.i, a, '']])
			var r = { hmr: !0, transform: void 0, insertInto: void 0 }
			n(24)(a, r)
			a.locals && (e.exports = a.locals)
		},
		130: function(e, t, n) {
			;(e.exports = n(23)(!1)).push([
				e.i,
				'.ArticlePage {\n  overflow-y: auto;\n  max-width: 980px;\n  width: calc(100vw - 50px);\n  background-color: #fff;\n  padding: 20px;\n  min-height: 100%;\n  flex: 1;\n  box-sizing: border-box;\n}\n.ArticlePage .ArticlePage__content {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  box-shadow: var(--box-shadow-base);\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid var(--border-color-base);\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item:first-child {\n  border-radius: var(--border-radius-base) var(--border-radius-base) 0 0;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item:last-child {\n  border-radius: 0 0 var(--border-radius-base) var(--border-radius-base);\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item:not(:last-child) {\n  border-bottom: 0px;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item:hover {\n  background-color: #f6f8fa;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item img {\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n  border-radius: var(--border-radius-base);\n  overflow: hidden;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item .ArticlePage__detail {\n  font-size: 12px;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item .ArticlePage__detail .ArticlePage__label {\n  color: #000;\n  margin: 3px;\n  border-radius: 2px;\n  box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);\n  height: 20px;\n  line-height: 15px;\n  font-weight: bold;\n  padding: 0.15em 4px;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item .ArticlePage__detail .ArticlePage__name {\n  text-align: center;\n  margin-right: 10px;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item .ArticlePage__detail .ArticlePage__title {\n  font-size: 16px;\n  font-weight: 600;\n  margin-right: 10px;\n}\n',
				''
			])
		},
		88: function(e, t, n) {
			'use strict'
			n.r(t),
				n.d(t, 'default', function() {
					return m
				})
			var a,
				r = n(103),
				i = n.n(r),
				l = n(1),
				c = n.n(l),
				o = n(123),
				s = n(19),
				d = n(97),
				_ = n(6),
				g = n(100)
			n(129)
			let m =
				Object(g.a)('文章列表')(
					(a =
						Object(s.b)(
							({ articleReducer: e, userReducer: t }) => ({
								userReducer: t,
								articleReducer: e
							}),
							{ fetchArticleListSaga: _.d }
						)(
							(a = class extends l.Component {
								componentDidMount() {
									this.props.fetchArticleListSaga()
								}
								render() {
									const e = i.a.get(
											this.props.userReducer,
											'res.data.viewer',
											''
										),
										t = i.a.get(
											this.props.articleReducer,
											'articleListHttpResponse.data.repositoryOwner.repository.issues.edges',
											[]
										)
									return c.a.createElement(
										'div',
										{ className: 'ArticlePage' },
										c.a.createElement(d.a, { title: '文章列表', data: e }),
										c.a.createElement(
											'div',
											{ className: 'ArticlePage__content' },
											Array.prototype.slice
												.call(t)
												.reverse()
												.map((e, t) =>
													c.a.createElement(
														o.a,
														{
															to: {
																pathname: '/articleDetail',
																hash: `#${e.node.title}`
															},
															className: 'ArticlePage__item',
															key: t
														},
														c.a.createElement('img', {
															src: e.node.author.avatarUrl,
															alt: '头像'
														}),
														c.a.createElement(
															'span',
															{ className: 'ArticlePage__detail' },
															c.a.createElement(
																'span',
																{ className: 'ArticlePage__title' },
																e.node.title
															),
															e.node.labels.nodes.map((e, t) =>
																c.a.createElement(
																	'span',
																	{
																		className:
																			'ArticlePage__label',
																		key: t,
																		style: {
																			background: `#${e.color}`
																		}
																	},
																	e.name
																)
															),
															c.a.createElement('br', null),
															c.a.createElement(
																'span',
																{ className: 'ArticlePage__name' },
																e.node.author.login
															),
															e.node.updatedAt
														)
													)
												)
										)
									)
								}
							})
						) || a)
				) || a
		},
		97: function(e, t, n) {
			'use strict'
			var a = n(1),
				r = n.n(a)
			n(98)
			t.a = function(e) {
				const { data: t, title: n } = e
				return r.a.createElement(
					'div',
					{ className: 'Viewer' },
					r.a.createElement(
						'div',
						{ className: 'Viewer__container' },
						r.a.createElement('h1', { className: 'Viewer__title' }, n),
						r.a.createElement(
							'div',
							{ className: 'Viewer__detail' },
							r.a.createElement('img', {
								className: 'Viewer__image',
								alt: 'avatar',
								src: t.avatarUrl
							}),
							r.a.createElement(
								'span',
								{ className: 'Viewer__detail-list' },
								r.a.createElement(
									'span',
									{ className: 'Viewer__detail-name' },
									t.name
								),
								r.a.createElement(
									'span',
									{ className: 'Viewer__detail-bio' },
									t.bio
								)
							)
						)
					)
				)
			}
		},
		98: function(e, t, n) {
			var a = n(99)
			'string' == typeof a && (a = [[e.i, a, '']])
			var r = { hmr: !0, transform: void 0, insertInto: void 0 }
			n(24)(a, r)
			a.locals && (e.exports = a.locals)
		},
		99: function(e, t, n) {
			;(e.exports = n(23)(!1)).push([
				e.i,
				'.Viewer {\n  width: 100%;\n}\n.Viewer .Viewer__container {\n  min-width: 550px;\n  margin-bottom: 1rem;\n  position: relative;\n  box-shadow: 0px 0px 5px #0003;\n  width: 100%;\n  height: 17rem;\n  background-image: url(https://static.pipk.top/api/public/images/background.png);\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-position-y: bottom;\n}\n.Viewer .Viewer__container .Viewer__detail {\n  background-color: rgba(245, 245, 245, 0.23);\n  flex: 0 0;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  box-sizing: border-box;\n  width: 100%;\n  align-items: stretch;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__image {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 1rem;\n  margin-right: 1rem;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-name {\n  font-size: 40px;\n  line-height: 30px;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-bio {\n  font-size: 16px;\n}\n',
				''
			])
		}
	}
])
