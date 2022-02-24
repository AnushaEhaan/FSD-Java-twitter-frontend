import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth.reducer';

const rootReducer = combineReducers({
	auth,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
