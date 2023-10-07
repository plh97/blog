import Api from '@/api'
import { expectSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'
import * as saga from '../user'
import { fetchUser, fetchUserSaga } from '@/redux-relate/actions/request'

describe('user saga testing', () => {
	it('fetchUser Saga test with success request', () => {
		return (
			expectSaga(saga.fetchUserSaga)
				// 输入点
				.dispatch(fetchUserSaga())
				// =====saga执行一次=====
				.provide([[call(Api.fetchUser)]])
				// 输出点
				.put(fetchUser())
				.run()
		)
	})
})
