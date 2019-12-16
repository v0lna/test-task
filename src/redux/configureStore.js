import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import usersReducer from './reducers/user';
import meowFactsReducer from './reducers/meowFacts';

const reducers = combineReducers({
  users: usersReducer,
  form: formReducer,
  meowFactsState: meowFactsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
