// Link.react.test.js
import React from 'react'
import Footer from '../index.jsx'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
	const tree = renderer.create(<Footer />).toJSON()
	expect(tree).toMatchSnapshot()
})
