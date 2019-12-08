;(window.webpackJsonp = window.webpackJsonp || []).push([
	[7],
	{
		100: function(e, n, a) {
			'use strict'
			var t = a(1),
				i = a.n(t)
			n.a = (e) => (n) =>
				class extends n {
					componentDidMount() {
						document.title = e
					}
					render() {
						return i.a.createElement(n, null)
					}
				}
		},
		104: function(e, n, a) {
			e.exports = a.p + '[1]-bg1.jpg'
		},
		218: function(e, n, a) {
			var t = a(219)
			'string' == typeof t && (t = [[e.i, t, '']])
			var i = { hmr: !0, transform: void 0, insertInto: void 0 }
			a(24)(t, i)
			t.locals && (e.exports = t.locals)
		},
		219: function(e, n, a) {
			n = e.exports = a(23)(!1)
			var t = a(47)(a(104))
			n.push([
				e.i,
				'.DetailPage {\n  overflow-y: auto;\n  max-width: 980px;\n  width: calc(100vw - 50px);\n  background-color: #fff;\n  padding: 20px;\n  min-height: 100%;\n  flex: 1;\n  box-sizing: border-box;\n}\n.DetailPage .DetailPage__background {\n  width: 100%;\n  overflow: auto;\n}\n.DetailPage .DetailPage__background .DetailPage__container {\n  min-width: 550px;\n  margin-bottom: 1rem;\n  position: relative;\n  width: 100%;\n  height: 17rem;\n  background-image: url(' +
					t +
					');\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-position-y: bottom;\n}\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail {\n  background-color: rgba(245, 245, 245, 0.23);\n  flex: 0 0 40%;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  box-sizing: border-box;\n  width: 100%;\n  align-items: center;\n}\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail img {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 0.3rem;\n  margin-right: 1rem;\n}\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail .DetailPage__detail-list {\n  display: inline-flex;\n  flex-direction: column;\n}\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail .DetailPage__detail-list .DetailPage__detail-name,\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail .DetailPage__detail-list .DetailPage__detail-bio {\n  font-size: 20px;\n}\n.DetailPage .DetailPage__content {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n',
				''
			])
		},
		90: function(e, n, a) {
			'use strict'
			a.r(n),
				a.d(n, 'default', function() {
					return u
				})
			var t,
				i = a(103),
				r = a.n(i),
				o = a(19),
				l = a(1),
				c = a.n(l),
				s = a(107),
				d = a.n(s),
				g = (a(218), a(97)),
				_ = a(6),
				m = a(100)
			const p = () => decodeURI(window.location.hash).replace(/^#/, '')
			let u =
				Object(m.a)(p())(
					(t =
						Object(o.b)(
							({ userReducer: e, repositoryReducer: n }) => ({
								userReducer: e,
								repositoryReducer: n
							}),
							{ fetchRepositoryDetailSaga: _.h }
						)(
							(t = class extends l.Component {
								componentDidMount() {
									this.props.fetchRepositoryDetailSaga(p())
								}
								render() {
									const e = r.a.get(
											this.props.userReducer,
											'res.data.viewer',
											''
										),
										n = r.a.get(
											this.props.repositoryReducer,
											'repositoryDetailHttpResponse.data.search.edges[0].node.object.text',
											''
										),
										a = r.a.get(
											this.props.repositoryReducer,
											'repositoryDetailHttpResponse.data.search.edges[0].node.nameWithOwner',
											''
										)
									return c.a.createElement(
										'div',
										{ className: 'DetailPage' },
										c.a.createElement(g.a, { title: a, data: e }),
										c.a.createElement(
											'div',
											{ className: 'DetailPage__content' },
											c.a.createElement(d.a, {
												className: 'markdown-body',
												source: n
											})
										)
									)
								}
							})
						) || t)
				) || t
		},
		97: function(e, n, a) {
			'use strict'
			var t = a(1),
				i = a.n(t)
			a(98)
			n.a = function(e) {
				const { data: n, title: a } = e
				return i.a.createElement(
					'div',
					{ className: 'Viewer' },
					i.a.createElement(
						'div',
						{ className: 'Viewer__container' },
						i.a.createElement('h1', { className: 'Viewer__title' }, a),
						i.a.createElement(
							'div',
							{ className: 'Viewer__detail' },
							i.a.createElement('img', {
								className: 'Viewer__image',
								alt: 'avatar',
								src: n.avatarUrl
							}),
							i.a.createElement(
								'span',
								{ className: 'Viewer__detail-list' },
								i.a.createElement(
									'span',
									{ className: 'Viewer__detail-name' },
									n.name
								),
								i.a.createElement(
									'span',
									{ className: 'Viewer__detail-bio' },
									n.bio
								)
							)
						)
					)
				)
			}
		},
		98: function(e, n, a) {
			var t = a(99)
			'string' == typeof t && (t = [[e.i, t, '']])
			var i = { hmr: !0, transform: void 0, insertInto: void 0 }
			a(24)(t, i)
			t.locals && (e.exports = t.locals)
		},
		99: function(e, n, a) {
			n = e.exports = a(23)(!1)
			var t = a(47)(a(29))
			n.push([
				e.i,
				'.Viewer {\n  width: 100%;\n}\n.Viewer .Viewer__container {\n  min-width: 550px;\n  margin-bottom: 1rem;\n  position: relative;\n  box-shadow: 0px 0px 5px #0003;\n  width: 100%;\n  height: 17rem;\n  background-image: url(' +
					t +
					');\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-position-y: bottom;\n}\n.Viewer .Viewer__container .Viewer__detail {\n  background-color: rgba(245, 245, 245, 0.23);\n  flex: 0 0;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  box-sizing: border-box;\n  width: 100%;\n  align-items: stretch;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__image {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 1rem;\n  margin-right: 1rem;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-name {\n  font-size: 40px;\n  line-height: 30px;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-bio {\n  font-size: 16px;\n}\n',
				''
			])
		}
	}
])
