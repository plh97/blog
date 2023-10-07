;(window.webpackJsonp = window.webpackJsonp || []).push([
	[7],
	{
		100: function(e, n, a) {
			e.exports = a.p + '[1]-bg1.jpg'
		},
		101: function(e, n, a) {
			'use strict'
			var i = a(1),
				r = a.n(i)
			n.a = (e) => (n) =>
				class extends n {
					componentDidMount() {
						document.title = e
					}
					render() {
						return r.a.createElement(n, null)
					}
				}
		},
		128: function(e, n, a) {
			var i = a(129)
			'string' == typeof i && (i = [[e.i, i, '']])
			var r = { hmr: !0, transform: void 0, insertInto: void 0 }
			a(23)(i, r)
			i.locals && (e.exports = i.locals)
		},
		129: function(e, n, a) {
			;(e.exports = a(22)(!1)).push([
				e.i,
				'.HomePage {\n  overflow-y: auto;\n  max-width: 980px;\n  background-color: #fff;\n  padding: 20px;\n  min-height: 100%;\n  flex: 1;\n  box-sizing: border-box;\n}\n.HomePage .HomePage-background {\n  width: 100%;\n  overflow: auto;\n}\n.HomePage .HomePage-background .HomePage-container {\n  min-width: 550px;\n  margin-bottom: 1rem;\n  position: relative;\n  width: 100%;\n  height: 17rem;\n  background-image: red;\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-position-y: bottom;\n}\n.HomePage .HomePage-background .HomePage-container .HomePage-detail {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 60%;\n  font-size: 30px;\n  display: inline-flex;\n  align-items: center;\n  background-color: rgba(245, 245, 245, 0.23);\n  flex: 0 0 100px;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  box-sizing: border-box;\n  width: 100%;\n}\n.HomePage .HomePage-background .HomePage-container .HomePage-detail img {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 1rem;\n  margin-right: 1rem;\n}\n.HomePage .HomePage-background .HomePage-container .HomePage-detail .HomePage-detail__list {\n  display: inline-flex;\n  flex-direction: column;\n}\n.HomePage .HomePage-background .HomePage-container .HomePage-detail .HomePage-detail__list .HomePage-detail__name,\n.HomePage .HomePage-background .HomePage-container .HomePage-detail .HomePage-detail__list .HomePage-detail__bio {\n  font-size: 20px;\n}\n.HomePage .HomePage-markdown__body p:first-child {\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.HomePage .HomePage-markdown__body p:first-child a {\n  flex: 0 0 auto;\n}\n.HomePage .HomePage-markdown__body p:first-child > img {\n  flex: 0 0 90px;\n}\n.HomePage .HomePage-markdown__body p a {\n  margin-right: 0.3em;\n}\n',
				''
			])
		},
		87: function(e, n, a) {
			'use strict'
			a.r(n),
				a.d(n, 'default', function() {
					return p
				})
			var i,
				r = a(1),
				o = a.n(r),
				t = a(104),
				d = a.n(t),
				m = a(18),
				l = (a(128), a(97)),
				c = a(6),
				s = a(101)
			const g = Object(r.lazy)(() => a.e(0).then(a.t.bind(null, 107, 7)))
			let p =
				Object(s.a)('首页')(
					(i =
						Object(m.b)(
							({ homeReducer: e, userReducer: n }) => ({
								userReducer: n,
								homeReducer: e
							}),
							{ fetchHomeSaga: c.f }
						)(
							(i = class extends r.Component {
								componentDidMount() {
									this.props.fetchHomeSaga()
								}
								render() {
									const e = d.a.get(
											this.props.userReducer,
											'res.data.viewer',
											''
										),
										n = d.a.get(
											this.props.homeReducer,
											'res.data.repositoryOwner.repository.object.text',
											''
										)
									return o.a.createElement(
										'div',
										{ className: 'HomePage' },
										o.a.createElement(l.a, { title: '主页', data: e }),
										o.a.createElement(g, {
											className: 'markdown-body HomePage-markdown__body',
											source: n
										})
									)
								}
							})
						) || i)
				) || i
		},
		97: function(e, n, a) {
			'use strict'
			var i = a(1),
				r = a.n(i)
			a(98)
			n.a = function(e) {
				const { data: n, title: a } = e
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
								src: n.avatarUrl
							}),
							r.a.createElement(
								'span',
								{ className: 'Viewer__detail-list' },
								r.a.createElement(
									'span',
									{ className: 'Viewer__detail-name' },
									n.name
								),
								r.a.createElement(
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
			var r = { hmr: !0, transform: void 0, insertInto: void 0 }
			a(23)(i, r)
			i.locals && (e.exports = i.locals)
		},
		99: function(e, n, a) {
			n = e.exports = a(22)(!1)
			var i = a(47)(a(100))
			n.push([
				e.i,
				'.Viewer {\n  width: 100%;\n}\n.Viewer .Viewer__container {\n  min-width: 550px;\n  margin-bottom: 1rem;\n  position: relative;\n  box-shadow: 0px 0px 5px #0003;\n  width: 100%;\n  height: 17rem;\n  background-image: url(' +
					i +
					');\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-position-y: bottom;\n}\n.Viewer .Viewer__container .Viewer__detail {\n  background-color: rgba(245, 245, 245, 0.23);\n  flex: 0 0;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  box-sizing: border-box;\n  width: 100%;\n  align-items: stretch;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__image {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 1rem;\n  margin-right: 1rem;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-name {\n  font-size: 40px;\n  line-height: 30px;\n}\n.Viewer .Viewer__container .Viewer__detail .Viewer__detail-list .Viewer__detail-bio {\n  font-size: 16px;\n}\n',
				''
			])
		}
	}
])
