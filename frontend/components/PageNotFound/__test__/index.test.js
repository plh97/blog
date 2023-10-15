// Link.react.test.js
import React from 'react'
import PageNotFound from '../index.jsx'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
	const tree = renderer.create(<PageNotFound />).toJSON()
	expect(tree).toMatchSnapshot()
})
