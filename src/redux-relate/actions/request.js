import Api from '@/api'
import {
	FETCH_HOME_PAGE,
	FETCH_USER_INFO,
	FETCH_ARTICLE_LIST,
	FETCH_ARTICLE_DETAIL,
	FETCH_REPOSITORY_LIST,
	FETCH_REPOSITORY_DETAIL
} from '@/redux-relate/constant/http'

export const fetchHome = () => (dispatch) =>
	Api.fetchHome().then(
		(res) =>
			dispatch({
				type: FETCH_HOME_PAGE,
				payload: res
			}),
		(err) =>
			dispatch({
				type: FETCH_HOME_PAGE,
				payload: err
			})
	)

export const fetchUser = () => (dispatch) =>
	Api.fetchUser().then(
		(res) =>
			dispatch({
				type: FETCH_USER_INFO,
				payload: res
			}),
		(err) =>
			dispatch({
				type: FETCH_USER_INFO,
				payload: err
			})
	)

export const fetchArticleList = () => (dispatch) =>
	Api.fetchArticleList().then(
		(res) =>
			dispatch({
				type: FETCH_ARTICLE_LIST,
				payload: res
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
	Api.fetchArticleDetail(keyWord).then(
		(res) =>
			dispatch({
				type: FETCH_ARTICLE_DETAIL,
				payload: res.data.search.edges[0].node
			}),
		(err) =>
			dispatch({
				type: FETCH_ARTICLE_DETAIL,
				payload: err
			})
	)

export const fetchRepositoryList = () => (dispatch) =>
	Api.fetchRepositoryList().then(
		(res) =>
			dispatch({
				type: FETCH_REPOSITORY_LIST,
				payload: res
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
	Api.fetchRepositoryDetail(keyWord).then(
		(res) =>
			dispatch({
				type: FETCH_REPOSITORY_DETAIL,
				payload: res
			}),
		(err) =>
			dispatch({
				type: FETCH_REPOSITORY_DETAIL,
				payload: err
			})
	)
