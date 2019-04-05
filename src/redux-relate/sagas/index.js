import { all } from 'redux-saga/effects'
import { fetchUserSaga } from './user'
import { fetchHomeSaga } from './home'
import { fetchArticleSaga, fetchArticleDetailSaga } from './article'
import { fetchRepositoryListSaga, fetchRepositoryDetailSaga } from './repository'

export default function*() {
	yield all([
		fetchUserSaga(),
		fetchHomeSaga(),
		fetchArticleSaga(),
		fetchArticleDetailSaga(),
		fetchRepositoryListSaga(),
		fetchRepositoryDetailSaga()
	])
}
