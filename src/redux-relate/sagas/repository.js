import { fetchRepositoryList, fetchRepositoryDetail } from '@/redux-relate/actions/request'
import { put, takeLatest, call } from 'redux-saga/effects'
import Api from '@/api'
import {
	FETCH_REPOSITORY_DETAIL_SAGA,
	FETCH_REPOSITORY_LIST_SAGA
} from '@/redux-relate/constant/http'

export function* fetchRepositoryListSaga() {
	yield takeLatest(FETCH_REPOSITORY_LIST_SAGA, function*() {
		try {
			const articleList = yield call(Api.fetchRepositoryList)
			yield put(fetchRepositoryList(articleList))
		} catch (error) {
			yield put(fetchRepositoryList(error))
		}
	})
}

export function* fetchRepositoryDetailSaga() {
	yield takeLatest(FETCH_REPOSITORY_DETAIL_SAGA, function*({ payload }) {
		try {
			const articleList = yield call(Api.fetchRepositoryDetail, payload)
			yield put(fetchRepositoryDetail(articleList))
		} catch (error) {
			yield put(fetchRepositoryDetail(error))
		}
	})
}
