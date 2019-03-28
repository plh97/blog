// package
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
// local
import './index.scss'
import Viewer from '@/components/Viewer'
import initPageWithTitleDecorator from '@/decorators/initPageWithTitleDecorator'
import { fetchArticleDetail } from '@/redux-relate/actions/request'
// code

const mapStateToProps = ({ userReducer, articleReducer }) => ({
	userReducer,
	articleReducer
})

const mapDispatchToProps = (dispatch) => ({
	fetchArticleDetail: bindActionCreators(fetchArticleDetail, dispatch)
})
let keyWord = () => decodeURI(window.location.hash).replace(/^#/, '')
@initPageWithTitleDecorator(keyWord())
@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class ArticleDetail extends Component {
	componentDidMount() {
		this.props.fetchArticleDetail(keyWord())
	}
	render() {
		const user = _.get(this.props.userReducer, 'res.data.viewer', '')
		const article = _.get(
			this.props.articleReducer,
			'articleDetailHttpResponse',
			''
		)
		return (
			<div className="DetailPage">
				<Viewer title={article.title} data={user} />
				<div className="DetailPage__content">
					<ReactMarkdown
						className="markdown-body"
						source={article.body}
					/>
				</div>
			</div>
		)
	}
}
