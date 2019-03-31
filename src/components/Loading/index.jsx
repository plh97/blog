import React, { Component } from 'react'

import './index.scss'
import loadingSvg from '@/ASSETS/loading.svg'

export default class Loading extends Component {
	static defaultProps = {
		text: '玩命加载中...'
	}

	render() {
		return (
			<div className="Loading">
				<img alt="loading" src={loadingSvg} />
				{this.props.text}
			</div>
		)
	}
}
