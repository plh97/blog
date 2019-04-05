// package
import _ from 'lodash'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
// local
import './index.scss'
import Viewer from '@/components/Viewer'
import initPageWithTitleDecorator from '@/decorators/initPageWithTitleDecorator'
import { fetchArticleDetailSaga } from '@/redux-relate/actions/request'
// code

let keyWord = () => decodeURI(window.location.hash).replace(/^#/, '')
const mapStateToProps = ({ userReducer, articleReducer }) => ({
	userReducer,
	articleReducer
})
@initPageWithTitleDecorator(keyWord())
@connect(
	mapStateToProps,
	{
		fetchArticleDetailSaga
	}
)
export default class ArticleDetail extends Component {
	componentDidMount() {
		this.props.fetchArticleDetailSaga(keyWord())
	}
	render() {
		const user = _.get(this.props.userReducer, 'res.data.viewer', '')
		const article = _.get(this.props.articleReducer, 'articleDetailHttpResponse', '')
		return (
			<div className="DetailPage">
				<Viewer title={article.title} data={user} />
				<div className="DetailPage__content">
					<ReactMarkdown className="markdown-body" source={article.body} />
				</div>
			</div>
		)
	}
}
