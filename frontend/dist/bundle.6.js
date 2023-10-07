;(window.webpackJsonp = window.webpackJsonp || []).push([
	[6],
	{
		100: function(e, t, n) {
			e.exports = n.p + '[1]-bg1.jpg'
		},
		101: function(e, t, n) {
			'use strict'
			var r = n(1),
				a = n.n(r)
			t.a = (e) => (t) =>
				class extends t {
					componentDidMount() {
						document.title = e
					}
					render() {
						return a.a.createElement(t, null)
					}
				}
		},
		130: function(e, t, n) {
			var r = n(131)
			'string' == typeof r && (r = [[e.i, r, '']])
			var a = { hmr: !0, transform: void 0, insertInto: void 0 }
			n(23)(r, a)
			r.locals && (e.exports = r.locals)
		},
		131: function(e, t, n) {
			;(e.exports = n(22)(!1)).push([
				e.i,
				'.ArticlePage {\n  overflow-y: auto;\n  max-width: 980px;\n  background-color: #fff;\n  padding: 20px;\n  min-height: 100%;\n  flex: 1;\n  box-sizing: border-box;\n}\n.ArticlePage .ArticlePage__content {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  box-shadow: var(--box-shadow-base);\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid var(--border-color-base);\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item:first-child {\n  border-radius: var(--border-radius-base) var(--border-radius-base) 0 0;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item:last-child {\n  border-radius: 0 0 var(--border-radius-base) var(--border-radius-base);\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item:not(:last-child) {\n  border-bottom: 0px;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item:hover {\n  background-color: #f6f8fa;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item img {\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n  border-radius: var(--border-radius-base);\n  overflow: hidden;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item .ArticlePage__detail {\n  font-size: 12px;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item .ArticlePage__detail .ArticlePage__label {\n  color: #000;\n  margin: 3px;\n  border-radius: 2px;\n  box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);\n  height: 20px;\n  line-height: 15px;\n  font-weight: bold;\n  padding: 0.15em 4px;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item .ArticlePage__detail .ArticlePage__name {\n  text-align: center;\n  margin-right: 10px;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.ArticlePage .ArticlePage__content .ArticlePage__item .ArticlePage__detail .ArticlePage__title {\n  font-size: 16px;\n  font-weight: 600;\n  margin-right: 10px;\n}\n',
				''
			])
		},
		88: function(e, t, n) {
			'use strict'
			n.r(t),
				n.d(t, 'default', function() {
					return m
				})
			var r,
				a = n(104),
				i = n.n(a),
				l = n(1),
				o = n.n(l),
				c = n(124),
				s = n(18),
				d = n(97),
				_ = n(6),
				g = n(101)
			n(130)
			let m =
				Object(g.a)('文章列表')(
					(r =
						Object(s.b)(
							({ articleReducer: e, userReducer: t }) => ({
								userReducer: t,
								articleReducer: e
							}),
							{ fetchArticleListSaga: _.d }
						)(
							(r = class extends l.Component {
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
									return o.a.createElement(
										'div',
										{ className: 'ArticlePage' },
										o.a.createElement(d.a, { title: '文章列表', data: e }),
										o.a.createElement(
											'div',
											{ className: 'ArticlePage__content' },
											Array.prototype.slice
												.call(t)
												.reverse()
												.map((e, t) =>
													o.a.createElement(
														c.a,
														{
															to: {
																pathname: '/articleDetail',
																hash: `#${e.node.title}`
															},
															className: 'ArticlePage__item',
															key: t
														},
														o.a.createElement('img', {
															src: e.node.author.avatarUrl,
															alt: '头像'
														}),
														o.a.createElement(
															'span',
															{ className: 'ArticlePage__detail' },
															o.a.createElement(
																'span',
																{ className: 'ArticlePage__title' },
																e.node.title
															),
															e.node.labels.nodes.map((e, t) =>
																o.a.createElement(
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
															o.a.createElement('br', null),
															o.a.createElement(
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
						) || r)
				) || r
		},
		97: function(e, t, n) {
			'use strict'
			var r = n(1),
				a = n.n(r)
			n(98)
			t.a = function(e) {
				const { data: t, title: n } = e
				return a.a.createElement(
					'div',
					{ className: 'Viewer' },
					a.a.createElement(
						'div',
						{ className: 'Viewer__container' },
						a.a.createElement('h1', { className: 'Viewer__title' }, n),
						a.a.createElement(
							'div',
							{ className: 'Viewer__detail' },
							a.a.createElement('img', {
								className: 'Viewer__image',
								alt: 'avatar',
								src: t.avatarUrl
							}),
							a.a.createElement(
								'span',
								{ className: 'Viewer__detail-list' },
								a.a.createElement(
									'span',
									{ className: 'Viewer__detail-name' },
									t.name
								),
								a.a.createElement(
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
			var r = n(99)
			'string' == typeof r && (r = [[e.i, r, '']])
			var a = { hmr: !0, transform: void 0, insertInto: void 0 }
			n(23)(r, a)
			r.locals && (e.exports = r.locals)
		},
		99: function(e, t, n) {
			t = e.exports = n(22)(!1)
			var r = n(47)(n(100))
			t.push([
				e.i,
				'.Viewer {\n  width: 100%;\n}\n.Viewer .Viewer__container {\n  min-width: 550px;\n  margin-bottom: 1rem;\n  position: relative;\n  box-shadow: 0px 0px 5px #0003;\n  width: 100%;\n  height: 17rem;\n  background-image: url(' +
					r +
					');\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-position-y: bottom;\n}\n.Viewer .Viewer__container .Viewer__detail {\n  background-color: rgba(245, 245, 245, 0.23);\n  flex: 0 0;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  box-sizing: border-box;\n  width: 100%;\n  align-items: stretch;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__image {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 1rem;\n  margin-right: 1rem;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-name {\n  font-size: 40px;\n  line-height: 30px;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-bio {\n  font-size: 16px;\n}\n',
				''
			])
		}
	}
])
