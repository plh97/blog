import {
  FETCH_PENDING,
  FETCH_REJECT,
  FETCH_RESOLVE,
} from '@/redux-relate/constant/http'

const initialState = {
  fetchStatus: FETCH_RESOLVE,
  res: {},
}


/**
 *
 *
 * @export    reducer
 * @param     {*} [state=initialState]
 * @param     {*} action
 * @returns
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PENDING: 
      return Object.assign({},state,{
        fetchStatus: FETCH_PENDING,
      })
    case FETCH_RESOLVE:
      return Object.assign({}, state, {
        fetchStatus: FETCH_RESOLVE,
        res: action.payload,
      })
    case FETCH_REJECT:
      return Object.assign({}, state, {
        fetchStatus: FETCH_REJECT,
        res: action.payload,
      })
    default:
      return state
  }
}