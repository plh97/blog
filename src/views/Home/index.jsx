import React, { Component,lazy } from 'react'
const ReactMarkdown = lazy(() => import('react-markdown'))
// import ReactMarkdown from 'react-markdown'
import { bindActionCreators, } from 'redux'
import { connect, } from 'react-redux'
import _ from 'lodash'
// const _ = lazy(() => import('lodash'))

// local
import './index.scss'
import Viewer from '@/components/Viewer'
import {
	fetchHome,
	fetchUser
}
from '@/redux-relate/actions/fetchHome'
// import Loading from '../../components/Loading';
// code

const mapStateToProps = ({
	homeReducer,
	userReducer
}) => ({
	homeReducer,
	userReducer,
})

const mapDispatchToProps = (dispatch) => ({
	fetchHome: bindActionCreators(fetchHome, dispatch),
	fetchUser: bindActionCreators(fetchUser, dispatch),
})

@connect(
	mapStateToProps,
	mapDispatchToProps,
)
export default class HomePage extends Component {
	componentDidMount() {
		this.props.fetchHome()
		this.props.fetchUser()
	}
	render() {
		const user = _.get(this.props.userReducer, 'res.data.viewer', '')
		const homePage = _.get(this.props.homeReducer, 'res.data.repositoryOwner.repository.object.text', '')
		return (
			<div className="HomePage">
				<Viewer title = "主页" data = {user}/>
				{/* <Loading isShow={fetchStatus === 'FETCH_PENDING'}/> */}
				<ReactMarkdown
					className="markdown-body HomePage-markdown__body"
					source = { homePage }
				/>
			</div>
		)
	}
}
