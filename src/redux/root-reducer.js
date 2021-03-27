import { combineReducers } from 'redux'; //to combine all reducers in the root
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer, //key is for the key in the state object
});
