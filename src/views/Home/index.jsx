import React, { Component, lazy } from 'react'
// import ReactMarkdown from 'react-markdown'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
// const _ = lazy(() => import('lodash'))

// local
import './index.scss'
import Viewer from '@/components/Viewer'
import { fetchHome } from '@/redux-relate/actions/fetchHome'
const ReactMarkdown = lazy(() => import('react-markdown'))
// import Loading from '../../components/Loading';
// code

const mapStateToProps = ({ homeReducer, userReducer }) => ({
	homeReducer,
	userReducer
})

const mapDispatchToProps = (dispatch) => ({
	fetchHome: bindActionCreators(fetchHome, dispatch)
})

@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class HomePage extends Component {
	componentDidMount() {
		this.props.fetchHome()
	}
	render() {
		const user = _.get(this.props.userReducer, 'res.data.viewer', '')
		const homePage = _.get(
			this.props.homeReducer,
			'res.data.repositoryOwner.repository.object.text',
			''
		)
		console.log(window)
		return (
			<div className="HomePage">
				<Viewer title="主页" data={user} />
				<ReactMarkdown
					className="markdown-body HomePage-markdown__body"
					source={homePage}
				/>
			</div>
		)
	}
}
