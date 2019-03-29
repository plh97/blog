// Link.react.test.js
import React from 'react'
import Layout from '../index.jsx'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom' // 4.0.0

it('renders correctly', () => {
	const tree = renderer
		.create(
			<Router>
				<Layout />
			</Router>
		)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
