import React, { Component, lazy } from 'react'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// const _ = lazy(() => import('lodash'))

// local
import './index.scss'
import Viewer from '@/components/Viewer'
import { fetchHome } from '@/redux-relate/actions/http'
import autoTitle from '@/decorators/initPageWithTitleDecorator'
import initPageWithTitleDecorator from '@/decorators/initPageWithTitleDecorator'
const ReactMarkdown = lazy(() => import('react-markdown'))
// import ReactMarkdown from 'react-markdown'
// import Loading from '../../components/Loading';
// code

const mapStateToProps = ({ homeReducer, userReducer }) => ({
	userReducer,
	homeReducer
})

const mapDispatchToProps = (dispatch) => ({
	fetchHome: bindActionCreators(fetchHome, dispatch)
})
@initPageWithTitleDecorator('首页')
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
