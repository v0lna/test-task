import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import usersReducer from './reducers/user';

const reducers = combineReducers({ users: usersReducer, form: formReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
