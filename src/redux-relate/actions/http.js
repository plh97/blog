import Api from '@/api'
import {
	FETCH_PENDING,
	FETCH_RESOLVE,
	FETCH_REJECT
} from '@/redux-relate/constant/http'

export function fetchPending() {
	return {
		type: FETCH_PENDING,
		payload: {}
	}
}
export function fetchResolve(res) {
	return {
		type: FETCH_RESOLVE,
		payload: res
	}
}
export function fetchReject(res) {
	return {
		type: FETCH_REJECT,
		payload: res
	}
}
