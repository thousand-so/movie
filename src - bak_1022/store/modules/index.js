import { combineReducers } from 'redux';
import crud from './crud';

export default combineReducers({
  crud,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});