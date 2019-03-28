import { combineReducers } from 'redux'
// 负责将 actions 中的行为具体实现

import homeReducer from './homeReducer'
import userReducer from './userReducer'

export default combineReducers({
	homeReducer,
	userReducer
})
