;(window.webpackJsonp = window.webpackJsonp || []).push([
	[5],
	{
		100: function(e, n, a) {
			'use strict'
			var i = a(1),
				t = a.n(i)
			n.a = (e) => (n) =>
				class extends n {
					componentDidMount() {
						document.title = e
					}
					render() {
						return t.a.createElement(n, null)
					}
				}
		},
		215: function(e, n, a) {
			var i = a(216)
			'string' == typeof i && (i = [[e.i, i, '']])
			var t = { hmr: !0, transform: void 0, insertInto: void 0 }
			a(24)(i, t)
			i.locals && (e.exports = i.locals)
		},
		216: function(e, n, a) {
			;(e.exports = a(23)(!1)).push([
				e.i,
				'.DetailPage {\n  overflow-y: auto;\n  max-width: 980px;\n  width: calc(100vw - 50px);\n  background-color: #fff;\n  padding: 20px;\n  min-height: 100%;\n  flex: 1;\n  box-sizing: border-box;\n}\n.DetailPage .DetailPage__background {\n  width: 100%;\n  overflow: auto;\n}\n.DetailPage .DetailPage__background .DetailPage__container {\n  min-width: 550px;\n  margin-bottom: 1rem;\n  position: relative;\n  width: 100%;\n  height: 17rem;\n  background-image: url(https://static.pipk.top/chat/public/3165624214738918.png);\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-position-y: bottom;\n}\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail {\n  background-color: rgba(245, 245, 245, 0.23);\n  flex: 0 0 40%;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  box-sizing: border-box;\n  width: 100%;\n  align-items: center;\n}\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail img {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 0.3rem;\n  margin-right: 1rem;\n}\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail .DetailPage__detail-list {\n  display: inline-flex;\n  flex-direction: column;\n}\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail .DetailPage__detail-list .DetailPage__detail-name,\n.DetailPage .DetailPage__background .DetailPage__container .DetailPage__detail .DetailPage__detail-list .DetailPage__detail-bio {\n  font-size: 20px;\n}\n.DetailPage .DetailPage__content {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n',
				''
			])
		},
		89: function(e, n, a) {
			'use strict'
			a.r(n),
				a.d(n, 'default', function() {
					return u
				})
			var i,
				t = a(103),
				r = a.n(t),
				l = a(19),
				o = a(1),
				c = a.n(o),
				d = a(106),
				s = a.n(d),
				_ = (a(215), a(97)),
				g = a(100),
				m = a(6)
			let p = () => decodeURI(window.location.hash).replace(/^#/, '')
			let u =
				Object(g.a)(p())(
					(i =
						Object(l.b)(
							({ userReducer: e, articleReducer: n }) => ({
								userReducer: e,
								articleReducer: n
							}),
							{ fetchArticleDetailSaga: m.b }
						)(
							(i = class extends o.Component {
								componentDidMount() {
									this.props.fetchArticleDetailSaga(p())
								}
								render() {
									const e = r.a.get(
											this.props.userReducer,
											'res.data.viewer',
											''
										),
										n = r.a.get(
											this.props.articleReducer,
											'articleDetailHttpResponse',
											''
										)
									return c.a.createElement(
										'div',
										{ className: 'DetailPage' },
										c.a.createElement(_.a, { title: n.title, data: e }),
										c.a.createElement(
											'div',
											{ className: 'DetailPage__content' },
											c.a.createElement(s.a, {
												className: 'markdown-body',
												source: n.body
											})
										)
									)
								}
							})
						) || i)
				) || i
		},
		97: function(e, n, a) {
			'use strict'
			var i = a(1),
				t = a.n(i)
			a(98)
			n.a = function(e) {
				const { data: n, title: a } = e
				return t.a.createElement(
					'div',
					{ className: 'Viewer' },
					t.a.createElement(
						'div',
						{ className: 'Viewer__container' },
						t.a.createElement('h1', { className: 'Viewer__title' }, a),
						t.a.createElement(
							'div',
							{ className: 'Viewer__detail' },
							t.a.createElement('img', {
								className: 'Viewer__image',
								alt: 'avatar',
								src: n.avatarUrl
							}),
							t.a.createElement(
								'span',
								{ className: 'Viewer__detail-list' },
								t.a.createElement(
									'span',
									{ className: 'Viewer__detail-name' },
									n.name
								),
								t.a.createElement(
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
			var i = a(99)
			'string' == typeof i && (i = [[e.i, i, '']])
			var t = { hmr: !0, transform: void 0, insertInto: void 0 }
			a(24)(i, t)
			i.locals && (e.exports = i.locals)
		},
		99: function(e, n, a) {
			;(e.exports = a(23)(!1)).push([
				e.i,
				'.Viewer {\n  width: 100%;\n}\n.Viewer .Viewer__container {\n  min-width: 550px;\n  margin-bottom: 1rem;\n  position: relative;\n  box-shadow: 0px 0px 5px #0003;\n  width: 100%;\n  height: 17rem;\n  background-image: url(https://static.pipk.top/api/public/images/background.png);\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-position-y: bottom;\n}\n.Viewer .Viewer__container .Viewer__detail {\n  background-color: rgba(245, 245, 245, 0.23);\n  flex: 0 0;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  box-sizing: border-box;\n  width: 100%;\n  align-items: stretch;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__image {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 1rem;\n  margin-right: 1rem;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-name {\n  font-size: 40px;\n  line-height: 30px;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-bio {\n  font-size: 16px;\n}\n',
				''
			])
		}
	}
])
