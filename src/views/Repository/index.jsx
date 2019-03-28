// package
import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// local
import { timeUtils } from '@/utils/time'
import Viewer from '@/components/Viewer'
import { fetchRepositoryList } from '@/redux-relate/actions/http'
import initPageWithTitleDecorator from '@/decorators/initPageWithTitleDecorator'
import './index.scss'
import { isTomorrow } from 'date-fns'

const mapStateToProps = ({ userReducer, repositoryReducer }) => ({
	repositoryReducer,
	userReducer
})

const mapDispatchToProps = (dispatch) => ({
	fetchRepositoryList: bindActionCreators(fetchRepositoryList, dispatch)
})

@initPageWithTitleDecorator('仓库列表')
@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class RepositoryPage extends Component {
	componentDidMount() {
		this.props.fetchRepositoryList()
	}
	render() {
		const user = _.get(this.props.userReducer, 'res.data.viewer', '')
		const repository = _.get(
			this.props.repositoryReducer,
			'repositoryListHttpResponse.data.repositoryOwner.repositories.edges',
			[]
		)
		return (
			<div className="RepositoryPage">
				<Viewer title="前端组件" data={user} />
				<div className="RepositoryPage__content">
					{Array.prototype.slice.call(repository).map((e, i) => (
						<div className="RepositoryPage__item" key={i}>
							<div className="RepositoryPage__item--left">
								<Link
									to={`/repositoryDetail#${
										e.node.nameWithOwner
									}`}
									className="RepositoryPage__name"
								>
									{e.node.nameWithOwner}
								</Link>
								<div className="RepositoryPage__description">
									{e.node.description}
								</div>
								<div className="RepositoryPage__detail">
									<span
										className="RepositoryPage__detail-language--color"
										style={{
											background: `${e.node
												.primaryLanguage &&
												e.node.primaryLanguage.color}`
										}}
									/>
									<span className="RepositoryPage__detail-language--content">
										{e.node.primaryLanguage &&
											e.node.primaryLanguage.name}
									</span>

									<span className="RepositoryPage__detail-stargazers">
										<svg
											aria-label="stars"
											viewBox="0 0 14 16"
											version="1.1"
											width="14"
											height="16"
											role="img"
										>
											<path
												fillRule="evenodd"
												d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
											/>
										</svg>
										<span className="RepositoryPage__detail-stargazers--text">
											{e.node.stargazers &&
												e.node.stargazers.totalCount}
										</span>
									</span>

									<span className="RepositoryPage__detail-stargazers">
										<svg
											aria-label="forks"
											viewBox="0 0 10 16"
											version="1.1"
											width="10"
											height="16"
											role="img"
										>
											<path
												fillRule="evenodd"
												d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
											/>
										</svg>
										<span className="RepositoryPage__detail-stargazers--text">
											{e.node.forkCount}
										</span>
									</span>
								</div>
							</div>
							<div className="RepositoryPage__item--right">
								<span className="RepositoryPage-update">
									上次更新: {timeUtils(e.node.updatedAt)}
								</span>
								<span className="RepositoryPage-commitCount">
									提交次数:
									{e.node.object &&
										e.node.object.history.totalCount}
								</span>

								<span className="RepositoryPage-link">
									{e.node.url && (
										<a
											className="RepositoryPage-link__item"
											rel="noopener noreferrer"
											target="_blank"
											href={e.node.url}
										>
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												version="1.1"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
												/>
											</svg>
										</a>
									)}
									{e.node.homepageUrl && (
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={e.node.homepageUrl}
										>
											<span
												role="img"
												aria-label="websites"
											>
												🌐
											</span>
										</a>
									)}
								</span>
								<span className="RepositoryPage-topic">
									{e.node.repositoryTopics.edges.map(
										(topic, i) => (
											<a
												className="RepositoryPage-topic__item"
												key={i}
												href={topic.node.url}
											>
												{topic.node.topic.name}
											</a>
										)
									)}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}
