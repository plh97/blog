import React, { Component } from 'react'

import loadingSvg from '@/assets/loading.svg'
import './index.scss'

export default class Loading extends Component {
	render() {
		return (
			<div className="Loading">
				<img alt="loading" src={loadingSvg} />
			</div>
		)
	}
}
