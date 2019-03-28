// package
import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// local
// import AxiosOrLocal from '@/utils/axiosOrLocal'
import Viewer from '@/components/Viewer'
import { fetchArticleList } from '@/redux-relate/actions/http'
import initPageWithTitleDecorator from '@/decorators/initPageWithTitleDecorator'

import './index.scss'
// code

const mapStateToProps = ({ articleReducer, userReducer }) => ({
	userReducer,
	articleReducer
})

const mapDispatchToProps = (dispatch) => ({
	fetchArticleList: bindActionCreators(fetchArticleList, dispatch)
})

@initPageWithTitleDecorator('文章列表')
@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class ArticlePage extends Component {
	componentDidMount() {
		this.props.fetchArticleList()
	}
	render() {
		const user = _.get(this.props.userReducer, 'res.data.viewer', '')
		const article = _.get(
			this.props.articleReducer,
			'articleListHttpResponse.data.repositoryOwner.repository.issues.edges',
			[]
		)
		return (
			<div className="ArticlePage">
				<Viewer title="文章列表" data={user} />
				<div className="ArticlePage__content">
					{Array.prototype.slice
						.call(article)
						.reverse()
						.map((e, i) => (
							<Link
								to={{
									pathname: '/articleDetail',
									hash: `#${e.node.title}`
								}}
								className="ArticlePage__item"
								key={i}
							>
								<img src={e.node.author.avatarUrl} alt="头像" />
								<span className="ArticlePage__detail">
									<span className="ArticlePage__title">
										{e.node.title}
									</span>
									{e.node.labels.nodes.map((label, i) => (
										<span
											className="ArticlePage__label"
											key={i}
											style={{
												background: `#${label.color}`
											}}
										>
											{label.name}
										</span>
									))}
									<br />
									<span className="ArticlePage__name">
										{e.node.author.login}
									</span>
									{e.node.updatedAt}
								</span>
							</Link>
						))}
				</div>
			</div>
		)
	}
}
