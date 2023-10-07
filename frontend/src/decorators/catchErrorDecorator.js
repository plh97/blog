import React, { Component } from 'react'
import Loading from '@/components/Loading'
import store from '@/redux-relate/store'
import { FETCH_PENDING, FETCH_REJECT, FETCH_RESOLVE } from '@/redux-relate/constant/http'

export default (WrappedComponent) => {
	return class extends Component {
		render() {
			const { httpStatus, message } = store.getState().httpReducer
			if (httpStatus === FETCH_REJECT) {
				return <div> 请求出错了 \n {message} </div>
			} else if (httpStatus === FETCH_PENDING) {
				return <Loading text="正在请求数据..." />
			} else if (httpStatus === FETCH_RESOLVE) {
				return <WrappedComponent {...this.props} />
			}
		}
	}
}
