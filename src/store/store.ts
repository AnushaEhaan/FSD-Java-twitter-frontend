import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth.reducer';
import signUp from './reducers/signUp.reducer';
import updateUser from './reducers/updateUser.reducer';
import profileUser from './reducers/profileInfo.reducer';

const rootReducer = combineReducers({
	auth,
	signUp,
	updateUser,
	profileUser
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
