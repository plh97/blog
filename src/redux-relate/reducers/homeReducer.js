import {
  FETCH_RESOLVE,
  FETCH_HOME_PAGE,
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
    case FETCH_HOME_PAGE:
      return Object.assign({},state,{
        res: action.payload,
      })
    default:
      return state
  }
}