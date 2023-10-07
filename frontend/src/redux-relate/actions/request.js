import {
	FETCH_HOME_PAGE,
	FETCH_USER_INFO,
	FETCH_ARTICLE_LIST,
	FETCH_ARTICLE_LIST_SAGA,
	FETCH_ARTICLE_DETAIL,
	FETCH_ARTICLE_DETAIL_SAGA,
	FETCH_REPOSITORY_LIST,
	FETCH_REPOSITORY_LIST_SAGA,
	FETCH_REPOSITORY_DETAIL,
	FETCH_REPOSITORY_DETAIL_SAGA,
	FETCH_USER_INFO_SAGA,
	FETCH_HOME_PAGE_SAGA
} from '@/redux-relate/constant/http'

// home
export const fetchHome = (res) => ({
	type: FETCH_HOME_PAGE,
	payload: res
})

export const fetchHomeSaga = (res) => ({
	type: FETCH_HOME_PAGE_SAGA,
	payload: res
})

// user
export const fetchUser = (res) => ({
	type: FETCH_USER_INFO,
	payload: res
})

export const fetchUserSaga = (res) => ({
	type: FETCH_USER_INFO_SAGA,
	payload: res
})

// articel list
export const fetchArticleList = (res) => ({
	type: FETCH_ARTICLE_LIST,
	payload: res
})

export const fetchArticleListSaga = () => ({
	type: FETCH_ARTICLE_LIST_SAGA
})

// articel detail
export const fetchArticleDetail = (res) => ({
	type: FETCH_ARTICLE_DETAIL,
	payload: res
})

export const fetchArticleDetailSaga = (res) => ({
	type: FETCH_ARTICLE_DETAIL_SAGA,
	payload: res
})

// repository list
export const fetchRepositoryList = (res) => ({
	type: FETCH_REPOSITORY_LIST,
	payload: res
})

export const fetchRepositoryListSaga = (res) => ({
	type: FETCH_REPOSITORY_LIST_SAGA,
	payload: res
})

// repository detail
export const fetchRepositoryDetail = (keyWord) => ({
	type: FETCH_REPOSITORY_DETAIL,
	payload: keyWord
})

export const fetchRepositoryDetailSaga = (res) => ({
	type: FETCH_REPOSITORY_DETAIL_SAGA,
	payload: res
})
