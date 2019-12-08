;(window.webpackJsonp = window.webpackJsonp || []).push([
	[10],
	{
		220: function(n, t, e) {
			var o = e(221)
			'string' == typeof o && (o = [[n.i, o, '']])
			var i = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(24)(o, i)
			o.locals && (n.exports = o.locals)
		},
		221: function(n, t, e) {
			;(n.exports = e(23)(!1)).push([
				n.i,
				'.PageNotFound {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.PageNotFound img {\n  width: 80%;\n}\n',
				''
			])
		},
		222: function(n, t, e) {
			n.exports = e.p + '[1]-404_img.svg'
		},
		91: function(n, t, e) {
			'use strict'
			e.r(t)
			var o = e(1),
				i = e.n(o),
				a = (e(220), e(222)),
				s = e.n(a)
			t.default = () =>
				i.a.createElement(
					'div',
					{ className: 'PageNotFound' },
					i.a.createElement('img', { alt: 'not_found', src: s.a })
				)
		}
	}
])
