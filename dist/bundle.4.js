;(window.webpackJsonp = window.webpackJsonp || []).push([
	[4],
	{
		184: function(e, a, t) {
			'use strict'
			t.r(a),
				t.d(a, 'default', function() {
					return p
				})
			var r,
				n = t(73),
				c = t.n(n),
				l = t(0),
				s = t.n(l),
				i = t(91),
				o = t(9),
				m = t(68),
				d = t(16),
				u = t(70)
			t(95)
			let p =
				Object(u.a)('文章列表')(
					(r =
						Object(o.b)(
							({ articleReducer: e, userReducer: a }) => ({
								userReducer: a,
								articleReducer: e
							}),
							{ fetchArticleList: d.b }
						)(
							(r = class extends l.Component {
								componentDidMount() {
									this.props.fetchArticleList()
								}
								render() {
									const e = c.a.get(
											this.props.userReducer,
											'res.data.viewer',
											''
										),
										a = c.a.get(
											this.props.articleReducer,
											'articleListHttpResponse.data.repositoryOwner.repository.issues.edges',
											[]
										)
									return s.a.createElement(
										'div',
										{ className: 'ArticlePage' },
										s.a.createElement(m.a, { title: '文章列表', data: e }),
										s.a.createElement(
											'div',
											{ className: 'ArticlePage__content' },
											Array.prototype.slice
												.call(a)
												.reverse()
												.map((e, a) =>
													s.a.createElement(
														i.a,
														{
															to: {
																pathname: '/articleDetail',
																hash: `#${e.node.title}`
															},
															className: 'ArticlePage__item',
															key: a
														},
														s.a.createElement('img', {
															src: e.node.author.avatarUrl,
															alt: '头像'
														}),
														s.a.createElement(
															'span',
															{ className: 'ArticlePage__detail' },
															s.a.createElement(
																'span',
																{ className: 'ArticlePage__title' },
																e.node.title
															),
															e.node.labels.nodes.map((e, a) =>
																s.a.createElement(
																	'span',
																	{
																		className:
																			'ArticlePage__label',
																		key: a,
																		style: {
																			background: `#${
																				e.color
																			}`
																		}
																	},
																	e.name
																)
															),
															s.a.createElement('br', null),
															s.a.createElement(
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
		68: function(e, a, t) {
			'use strict'
			var r = t(0),
				n = t.n(r)
			t(69)
			a.a = function(e) {
				const { data: a, title: t } = e
				return n.a.createElement(
					'div',
					{ className: 'Viewer' },
					n.a.createElement(
						'div',
						{ className: 'Viewer__container' },
						n.a.createElement('h1', { className: 'Viewer__title' }, t),
						n.a.createElement(
							'div',
							{ className: 'Viewer__detail' },
							n.a.createElement('img', {
								className: 'Viewer__image',
								alt: 'avatar',
								src: a.avatarUrl
							}),
							n.a.createElement(
								'span',
								{ className: 'Viewer__detail-list' },
								n.a.createElement(
									'span',
									{ className: 'Viewer__detail-name' },
									a.name
								),
								n.a.createElement(
									'span',
									{ className: 'Viewer__detail-bio' },
									a.bio
								)
							)
						)
					)
				)
			}
		},
		69: function(e, a, t) {},
		70: function(e, a, t) {
			'use strict'
			var r = t(0),
				n = t.n(r)
			a.a = (e) => (a) =>
				class extends a {
					componentDidMount() {
						document.title = e
					}
					render() {
						return n.a.createElement(a, null)
					}
				}
		},
		95: function(e, a, t) {}
	}
])
