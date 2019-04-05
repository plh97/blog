import Api from '@/api'
import { expectSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'
import * as saga from '../repository'
import {
	fetchRepositoryList,
	fetchRepositoryListSaga,
	fetchRepositoryDetail,
	fetchRepositoryDetailSaga
} from '@/redux-relate/actions/request'

describe('user saga testing', () => {
	it('Saga with fetch repository list test', () => {
		return (
			expectSaga(saga.fetchRepositoryListSaga)
				// 输入点
				.dispatch(fetchRepositoryListSaga())
				// =====saga执行一次=====
				.provide([[call(Api.fetchRepositoryList)]])
				// 输出点
				.put(fetchRepositoryList())
				.run()
		)
	})

	it('Saga with fetch repository detail test', () => {
		const query = 'React'
		const repository = { name: 123 }
		return (
			expectSaga(saga.fetchRepositoryDetailSaga)
				// 输入点
				.dispatch(fetchRepositoryDetailSaga(query))
				// =====mock一次网络请求, 实际输出=====
				.provide([[call(Api.fetchRepositoryDetail, query), repository]])
				// 期望输出点
				.put(fetchRepositoryDetail(repository))
				.run()
		)
	})
})
