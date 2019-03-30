;(window.webpackJsonp = window.webpackJsonp || []).push([
	[6],
	{
		179: function(e, t, a) {},
		186: function(e, t, a) {
			'use strict'
			a.r(t),
				a.d(t, 'default', function() {
					return _
				})
			var r,
				n = a(73),
				s = a.n(n),
				c = a(9),
				i = a(0),
				o = a.n(i),
				l = a(76),
				d = a.n(l),
				m = (a(179), a(68)),
				p = a(16),
				u = a(70)
			const w = () => decodeURI(window.location.hash).replace(/^#/, '')
			let _ =
				Object(u.a)(w())(
					(r =
						Object(c.b)(
							({ userReducer: e, repositoryReducer: t }) => ({
								userReducer: e,
								repositoryReducer: t
							}),
							{ fetchRepositoryDetail: p.d }
						)(
							(r = class extends i.Component {
								componentDidMount() {
									this.props.fetchRepositoryDetail(w())
								}
								render() {
									const e = s.a.get(
											this.props.userReducer,
											'res.data.viewer',
											''
										),
										t = s.a.get(
											this.props.repositoryReducer,
											'repositoryDetailHttpResponse.data.search.edges[0].node.object.text',
											''
										),
										a = s.a.get(
											this.props.repositoryReducer,
											'repositoryDetailHttpResponse.data.search.edges[0].node.nameWithOwner',
											''
										)
									return o.a.createElement(
										'div',
										{ className: 'DetailPage' },
										o.a.createElement(m.a, { title: a, data: e }),
										o.a.createElement(
											'div',
											{ className: 'DetailPage__content' },
											o.a.createElement(d.a, {
												className: 'markdown-body',
												source: t
											})
										)
									)
								}
							})
						) || r)
				) || r
		},
		68: function(e, t, a) {
			'use strict'
			var r = a(0),
				n = a.n(r)
			a(69)
			t.a = function(e) {
				const { data: t, title: a } = e
				return n.a.createElement(
					'div',
					{ className: 'Viewer' },
					n.a.createElement(
						'div',
						{ className: 'Viewer__container' },
						n.a.createElement('h1', { className: 'Viewer__title' }, a),
						n.a.createElement(
							'div',
							{ className: 'Viewer__detail' },
							n.a.createElement('img', {
								className: 'Viewer__image',
								alt: 'avatar',
								src: t.avatarUrl
							}),
							n.a.createElement(
								'span',
								{ className: 'Viewer__detail-list' },
								n.a.createElement(
									'span',
									{ className: 'Viewer__detail-name' },
									t.name
								),
								n.a.createElement(
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
		69: function(e, t, a) {},
		70: function(e, t, a) {
			'use strict'
			var r = a(0),
				n = a.n(r)
			t.a = (e) => (t) =>
				class extends t {
					componentDidMount() {
						document.title = e
					}
					render() {
						return n.a.createElement(t, null)
					}
				}
		}
	}
])
