// package
import _ from 'lodash'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
// local
import './index.scss'
import Viewer from '@/components/Viewer'
import { fetchRepositoryDetailSaga } from '@/redux-relate/actions/request'
import initPageWithTitleDecorator from '@/decorators/initPageWithTitleDecorator'

const mapStateToProps = ({ userReducer, repositoryReducer }) => ({
	userReducer,
	repositoryReducer
})
const keyWord = () => decodeURI(window.location.hash).replace(/^#/, '')
@initPageWithTitleDecorator(keyWord())
@connect(
	mapStateToProps,
	{ fetchRepositoryDetailSaga }
)
export default class RepositoryDetail extends Component {
	componentDidMount() {
		this.props.fetchRepositoryDetailSaga(keyWord())
	}
	render() {
		const user = _.get(this.props.userReducer, 'res.data.viewer', '')
		const repositoryText = _.get(
			this.props.repositoryReducer,
			'repositoryDetailHttpResponse.data.search.edges[0].node.object.text',
			''
		)
		const nameWithOwner = _.get(
			this.props.repositoryReducer,
			'repositoryDetailHttpResponse.data.search.edges[0].node.nameWithOwner',
			''
		)
		return (
			<div className="DetailPage">
				<Viewer title={nameWithOwner} data={user} />
				<div className="DetailPage__content">
					<ReactMarkdown className="markdown-body" source={repositoryText} />
				</div>
			</div>
		)
	}
}
