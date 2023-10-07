import Api from '@/api'
import { expectSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'
import * as saga from '../home'
import { fetchHome, fetchHomeSaga } from '@/redux-relate/actions/request'

describe('user saga testing', () => {
	it('fetchHome Saga test with success request', () => {
		return (
			expectSaga(saga.fetchHomeSaga)
				// 输入点
				.dispatch(fetchHomeSaga())
				// =====saga执行一次=====
				.provide([[call(Api.fetchHome)]])
				// 输出点
				.put(fetchHome())
				.run()
		)
	})
})
