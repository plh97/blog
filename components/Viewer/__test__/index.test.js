// Link.react.test.js
import React from 'react'
import renderer from 'react-test-renderer'
import Viewer from '../index.js'

it('renders correctly', () => {
	const props = {
		title: '标题',
		data: {
			avatarUrl: 'http://baidu.com',
			bio: '名言',
			name: '名字'
		}
	}
	const tree = renderer.create(<Viewer {...props} />).toJSON()
	expect(tree).toMatchSnapshot()
})
