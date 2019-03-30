;(window.webpackJsonp = window.webpackJsonp || []).push([
	[5],
	{
		183: function(e, t, a) {
			'use strict'
			a.r(t),
				a.d(t, 'default', function() {
					return p
				})
			var n,
				r = a(0),
				c = a.n(r),
				s = a(73),
				i = a.n(s),
				o = a(9),
				l = (a(94), a(68)),
				m = a(16),
				d = a(70)
			const u = Object(r.lazy)(() => a.e(0).then(a.t.bind(null, 76, 7)))
			let p =
				Object(d.a)('首页')(
					(n =
						Object(o.b)(
							({ homeReducer: e, userReducer: t }) => ({
								userReducer: t,
								homeReducer: e
							}),
							{ fetchHome: m.c }
						)(
							(n = class extends r.Component {
								componentDidMount() {
									this.props.fetchHome()
								}
								render() {
									const e = i.a.get(
											this.props.userReducer,
											'res.data.viewer',
											''
										),
										t = i.a.get(
											this.props.homeReducer,
											'res.data.repositoryOwner.repository.object.text',
											''
										)
									return c.a.createElement(
										'div',
										{ className: 'HomePage' },
										c.a.createElement(l.a, { title: '主页', data: e }),
										c.a.createElement(u, {
											className: 'markdown-body HomePage-markdown__body',
											source: t
										})
									)
								}
							})
						) || n)
				) || n
		},
		68: function(e, t, a) {
			'use strict'
			var n = a(0),
				r = a.n(n)
			a(69)
			t.a = function(e) {
				const { data: t, title: a } = e
				return r.a.createElement(
					'div',
					{ className: 'Viewer' },
					r.a.createElement(
						'div',
						{ className: 'Viewer__container' },
						r.a.createElement('h1', { className: 'Viewer__title' }, a),
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
		69: function(e, t, a) {},
		70: function(e, t, a) {
			'use strict'
			var n = a(0),
				r = a.n(n)
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
		94: function(e, t, a) {}
	}
])
