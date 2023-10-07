import React, { Component, lazy } from 'react'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// const _ = lazy(() => import('lodash'))

// local
import './index.less'
import Viewer from '@/components/Viewer'
import { fetchHomeSaga } from '@/redux-relate/actions/request'
import initPageWithTitleDecorator from '@/decorators/initPageWithTitleDecorator'
const ReactMarkdown = lazy(() => import('react-markdown'))
// import ReactMarkdown from 'react-markdown'
// import Loading from '../../components/Loading';
// code

const mapStateToProps = ({ homeReducer, userReducer }) => ({
	userReducer,
	homeReducer
})

@initPageWithTitleDecorator('首页')
@connect(
	mapStateToProps,
	{
		fetchHomeSaga
	}
)
export default class HomePage extends Component {
	componentDidMount() {
		this.props.fetchHomeSaga()
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
