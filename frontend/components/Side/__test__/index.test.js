// Link.react.test.js
import React from 'react'
import Side from '../index.jsx'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom' // 4.0.0

it('renders Side component correctly', () => {
	const tree = renderer
		.create(
			<Router>
				<Side />
			</Router>
		)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
