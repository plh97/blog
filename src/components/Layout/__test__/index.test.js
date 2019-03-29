// Link.react.test.js
import React from 'react'
import Layout from '../index.jsx'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
	const tree = renderer.create(<Layout />).toJSON()
	expect(tree).toMatchSnapshot()
})
