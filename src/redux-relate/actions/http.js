import AxiosOrLocal from '@/utils/axiosOrLocal'
import {
	FETCH_PENDING,
	FETCH_RESOLVE,
	FETCH_REJECT,
	FETCH_HOME_PAGE,
	FETCH_USER_INFO,
	FETCH_ARTICLE_LIST,
	FETCH_ARTICLE_DETAIL,
	FETCH_REPOSITORY_LIST,
	FETCH_REPOSITORY_DETAIL
} from '@/redux-relate/constant/http'

export function fetchPending() {
	return {
		type: FETCH_PENDING,
		payload: {}
	}
}
export function fetchResolve(res) {
	return {
		type: FETCH_RESOLVE,
		payload: res
	}
}
export function fetchReject(res) {
	return {
		type: FETCH_REJECT,
		payload: res
	}
}

export const fetchHome = () => (dispatch) =>
	new AxiosOrLocal({
		key: FETCH_HOME_PAGE,
		url: 'https://api.pipk.top/graphql',
		method: 'post',
		data: {
			query: `{
            repositoryOwner(login: "pengliheng") {
                repository(name: "pengliheng.github.io") {
                    object(expression: "master:README.md") {
                        ... on Blob {
                            text
                        }
                    }
                }
            }
        }`
		}
	}).then(
		(res) =>
			dispatch({
				type: FETCH_HOME_PAGE,
				payload: res.data
			}),
		(err) =>
			dispatch({
				type: FETCH_HOME_PAGE,
				payload: err
			})
	)

export const fetchUser = () => (dispatch) =>
	new AxiosOrLocal({
		key: FETCH_USER_INFO,
		url: 'https://api.pipk.top/graphql',
		method: 'post',
		data: {
			query: `{
		viewer {
			name avatarUrl login bio url createdAt isHireable
		}
	}`
		}
	}).then(
		(res) =>
			dispatch({
				type: FETCH_USER_INFO,
				payload: res.data
			}),
		(err) =>
			dispatch({
				type: FETCH_USER_INFO,
				payload: err
			})
	)

export const fetchArticleList = () => (dispatch) =>
	new AxiosOrLocal({
		key: FETCH_ARTICLE_LIST,
		url: 'https://api.pipk.top/graphql',
		method: 'post',
		data: {
			query: ` {
			    repositoryOwner(login: "pengliheng") {
			        repository(name: "pengliheng.github.io") {
			            issues(first: 100, states: OPEN) {
			                edges {
			                    node {
			                        updatedAt createdAt title id
			                        author {
			                            avatarUrl login
			                        }
			                        labels(first: 5) {
			                            nodes {
			                                name color
			                            }
			                        }
			                    }
			                }
			            }
			        }
			    }
			}`
		}
	}).then(
		(res) =>
			dispatch({
				type: FETCH_ARTICLE_LIST,
				payload: res.data
			}),
		(err) =>
			dispatch({
				type: FETCH_ARTICLE_LIST,
				payload: err
			})
	)
/**
 *
 *
 * @param {*} keyWord
 * @returns {*} 返回某一篇文章
 */
export const fetchArticleDetail = (keyWord) => (dispatch) =>
	new AxiosOrLocal({
		key: keyWord,
		url: 'https://api.pipk.top/graphql',
		method: 'post',
		data: {
			query: `{
				search(
				  first: 10, 
				  query: "repo:pengliheng/pengliheng.github.io author:pengliheng type:Issues ${keyWord}",
				  type: ISSUE
				) {
				  edges {
					node {
					  ... on Issue {
						body title
					  }
					}
				  }
				}
			}`
		}
	}).then(
		(res) =>
			dispatch({
				type: FETCH_ARTICLE_DETAIL,
				payload: res.data.data.search.edges[0].node
			}),
		(err) =>
			dispatch({
				type: FETCH_ARTICLE_DETAIL,
				payload: err
			})
	)

export const fetchRepositoryList = () => (dispatch) =>
	new AxiosOrLocal({
		key: FETCH_REPOSITORY_LIST,
		url: 'https://api.pipk.top/graphql',
		method: 'post',
		data: {
			query: `{
				repositoryOwner(login: "pengliheng") {
					repositories(last: 100,isFork:false,orderBy:{field:UPDATED_AT,direction:DESC}) {
						edges {
							node {
								object(expression: "master") {
									... on Commit {
										history {
											totalCount
										}
									}
								}
								repositoryTopics(first:3) {
									edges {
										node {
											url
											topic {
												name
											}
										}
									}
								}
								url
								description
								homepageUrl
								nameWithOwner
								updatedAt
								forkCount
								primaryLanguage {
									name
									color
								}
								stargazers {
									totalCount
								}
							}
						}
					}
				}
			}`
		}
	}).then(
		(res) =>
			dispatch({
				type: FETCH_REPOSITORY_LIST,
				payload: res.data
			}),
		(err) =>
			dispatch({
				type: FETCH_REPOSITORY_LIST,
				payload: err
			})
	)
/**
 *
 *
 * @param {*} keyWord
 * @returns {*} 返回某一篇文章
 */
export const fetchRepositoryDetail = (keyWord) => (dispatch) =>
	new AxiosOrLocal({
		key: keyWord,
		url: 'https://api.pipk.top/graphql',
		method: 'post',
		data: {
			query: `{
				search(first: 1, query: "repo:${keyWord}", type: REPOSITORY) {
					edges {
						node {
							... on Repository {
								nameWithOwner
								object(expression: "master:README.md") {
									... on Blob {
										text
									}
								}
							}
						}
					}
				}
			}`
		}
	}).then(
		(res) =>
			dispatch({
				type: FETCH_REPOSITORY_DETAIL,
				payload: res.data
			}),
		(err) =>
			dispatch({
				type: FETCH_REPOSITORY_DETAIL,
				payload: err
			})
	)
