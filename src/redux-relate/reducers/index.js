import {combineReducers,} from 'redux'
// 负责将 actions 中的行为具体实现


import homeReducer from './homeReducer'
import myInfoReducer from './myInfoReducer'


export default combineReducers({
  homeReducer,
  myInfoReducer,
  // user
})