import { FETCH_PENDING, FETCH_RESOLVE, FETCH_REJECT } from '@/redux-relate/constant/http'

export const fetchPending = {
	type: FETCH_PENDING,
	payload: {}
}
export const fetchResolve = {
	type: FETCH_RESOLVE,
	payload: {}
}
export const fetchReject = {
	type: FETCH_REJECT,
	payload: {}
}
