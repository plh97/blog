import Api from '@/api'
import { expectSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'
import * as saga from '../article'
import {
	fetchArticleList,
	fetchArticleListSaga,
	fetchArticleDetail,
	fetchArticleDetailSaga
} from '@/redux-relate/actions/request'

describe('user saga testing', () => {
	it('Saga with fetch article list test', () => {
		return (
			expectSaga(saga.fetchArticleListSaga)
				// 输入点
				.dispatch(fetchArticleListSaga())
				// =====saga执行一次=====
				.provide([[call(Api.fetchArticleList)]])
				// 输出点
				.put(fetchArticleList())
				.run()
		)
	})

	it('Saga with fetch article detail test', () => {
		const query = 'React'
		const article = { name: 123 }
		const mockResponse = {
			data: {
				search: {
					edges: [
						{
							node: article
						}
					]
				}
			}
		}
		return (
			expectSaga(saga.fetchArticleDetailSaga)
				// 输入点
				.dispatch(fetchArticleDetailSaga(query))
				// =====mock一次网络请求, 实际输出=====
				.provide([[call(Api.fetchArticleDetail, query), mockResponse]])
				// 期望输出点
				.put(fetchArticleDetail(article))
				.run()
		)
	})
})
