import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import user from './reducers/user.reducer'
import signUp from './reducers/signUp.reducer'
import tweets from './reducers/tweets.reducer'
import trends from './reducers/trends.reducer'
import comments from './reducers/comments.reducer'
import { applyMiddleware, createStore } from 'redux'
import updateUser from './reducers/updateUser.reducer'
import profileUser from './reducers/profileInfo.reducer'
import notifications from './reducers/notification.reducer'
import { IRootState } from '../types/store/IRootState.type'
import suggestedUsers from './reducers/suggestedUsers.reducer'
import userPeople from './reducers/userFollwersAndFollowing.reducer'

const rootReducer = combineReducers<IRootState>({
   signUp,
   user,
   updateUser,
   profileUser,
   tweets,
   comments,
   trends,
   suggestedUsers,
   userPeople,
   notifications,
})

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export default store
