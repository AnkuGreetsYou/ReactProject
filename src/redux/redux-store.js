import appReducer from './app-reducer.js';
import sidebarReducer from './sidebar-reducer.js';
import profileReducer from './profile-reducer.js';
import messagesReducer from './messages-reducer.js';
import authReducer from "./auth-reducer.js";
import usersReducer from './users-reducer.js';

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as FormReducer } from 'redux-form';

import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
	app: appReducer,
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: FormReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;