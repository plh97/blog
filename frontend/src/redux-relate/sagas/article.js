import { fetchArticleList, fetchArticleDetail } from '@/redux-relate/actions/request'
import { put, takeLatest, call } from 'redux-saga/effects'
import { FETCH_ARTICLE_LIST_SAGA, FETCH_ARTICLE_DETAIL_SAGA } from '@/redux-relate/constant/http'
import Api from '@/api'

export function* fetchArticleListSaga() {
	yield takeLatest(FETCH_ARTICLE_LIST_SAGA, function*() {
		try {
			const articleList = yield call(Api.fetchArticleList)
			yield put(fetchArticleList(articleList))
		} catch (error) {
			yield put(fetchArticleList(error))
		}
	})
}

export function* fetchArticleDetailSaga() {
	yield takeLatest(FETCH_ARTICLE_DETAIL_SAGA, function*({ payload }) {
		try {
			const res = yield call(Api.fetchArticleDetail, payload)
			yield put(fetchArticleDetail(res.data.search.edges[0].node))
		} catch (error) {
			yield put(fetchArticleDetail(error))
		}
	})
}
