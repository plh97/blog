import {combineReducers} from 'redux';
// 负责将 actions 中的行为具体实现


// import user from './user';
import resources from './resources';


export default combineReducers({
  resources,
  // user
});