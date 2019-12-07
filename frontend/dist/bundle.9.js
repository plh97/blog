;(window.webpackJsonp = window.webpackJsonp || []).push([
	[9],
	{
		119: function(n, e, t) {
			var i = t(120)
			'string' == typeof i && (i = [[n.i, i, '']])
			var a = { hmr: !0, transform: void 0, insertInto: void 0 }
			t(24)(i, a)
			i.locals && (n.exports = i.locals)
		},
		120: function(n, e, t) {
			;(n.exports = t(23)(!1)).push([
				n.i,
				'.Layout__container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.Layout__container .Layout__content {\n  margin: auto;\n  flex: 1;\n  width: 1200px;\n  display: flex;\n  flex-direction: row;\n  background: #fff;\n}\n',
				''
			])
		},
		121: function(n, e, t) {
			var i = t(122)
			'string' == typeof i && (i = [[n.i, i, '']])
			var a = { hmr: !0, transform: void 0, insertInto: void 0 }
			t(24)(i, a)
			i.locals && (n.exports = i.locals)
		},
		122: function(n, e, t) {
			;(n.exports = t(23)(!1)).push([
				n.i,
				'.Side__container {\n  background: var(--grey9);\n  flex: 0 0 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 14px;\n}\n.Side__container .Side__nav {\n  display: flex;\n  flex-direction: column;\n  padding-top: 20px;\n}\n.Side__container .Side__nav .Side__nav-item {\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  height: 45px;\n  padding: 0 20px;\n  color: var(--grey1);\n  transition: 0.2s all ease;\n  box-sizing: border-box;\n  border-left: 0px solid var(--blue1);\n}\n.Side__container .Side__nav .Side__nav-item .icon {\n  margin-right: 20px;\n  color: #fff;\n  font-size: 18px;\n}\n.Side__container .Side__nav .Side__nav-item:hover,\n.Side__container .Side__nav .Side__nav-item.active {\n  cursor: pointer;\n  background: var(--grey8);\n}\n.Side__container .Side__nav .Side__nav-item:hover a,\n.Side__container .Side__nav .Side__nav-item.active a {\n  color: var(--blue1);\n}\n.Side__container .Side__nav .Side__nav-item.active {\n  border-left: 3px solid var(--blue1);\n}\n.Side__container .Side__history {\n  flex: 0 0 300px;\n  padding: 10px;\n}\n.Side__container .Side__history .Side__history-title {\n  font-size: 24px;\n  color: #ccc;\n}\n.Side__container .Side__history .Side__history-content {\n  line-height: 1.5em;\n  padding-left: 20px;\n  color: #999;\n}\n.Side__container .Side__history .Side__history-content a {\n  margin-left: 10px;\n  color: #999;\n  text-decoration: none;\n}\n.Side__container .Side__history .Side__history-content a:hover {\n  color: #00b4cf;\n}\n',
				''
			])
		},
		124: function(n, e, t) {
			var i = t(125)
			'string' == typeof i && (i = [[n.i, i, '']])
			var a = { hmr: !0, transform: void 0, insertInto: void 0 }
			t(24)(i, a)
			i.locals && (n.exports = i.locals)
		},
		125: function(n, e, t) {
			;(n.exports = t(23)(!1)).push([
				n.i,
				'.Footer-container {\n  width: 100%;\n  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);\n  height: 30px;\n  min-width: 1200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  z-index: 1;\n}\n.Footer-container span {\n  margin-right: 2px;\n  margin-left: 2px;\n}\n',
				''
			])
		},
		223: function(n, e, t) {
			'use strict'
			t.r(e)
			var i = t(1),
				a = t.n(i),
				o = (t(119), t(222)),
				r = t(31),
				c =
					(t(121),
					() =>
						a.a.createElement(
							'div',
							{ className: 'Side__container' },
							a.a.createElement(
								'div',
								{ className: 'Side__nav' },
								r.a
									.filter((n) => n.content)
									.map((n) =>
										a.a.createElement(
											o.a,
											{
												key: n.path,
												exact: n.exact,
												to: n.path,
												className: 'Side__nav-item'
											},
											a.a.createElement('i', {
												className: 'icon icon-dashboard'
											}),
											n.content
										)
									)
							)
						))
			t(124)
			class l extends i.Component {
				render() {
					return a.a.createElement(
						'div',
						{ className: 'Footer-container' },
						'©',
						a.a.createElement('span', null, 'Copyright'),
						a.a.createElement('span', null, '2017-2019'),
						a.a.createElement('span', null, a.a.createElement('b', null, 'pipk.top'))
					)
				}
			}
			e.default = ({ children: n }) =>
				a.a.createElement(
					'div',
					{ className: 'Layout__container' },
					a.a.createElement(
						'div',
						{ className: 'Layout__content' },
						a.a.createElement(c, null),
						n
					),
					a.a.createElement(l, null)
				)
		}
	}
])
