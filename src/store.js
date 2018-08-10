import {createStore, applyMiddleware,combineReducers} from 'redux';

import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";
const logger = createLogger();

import {countReducer} from './reducers/count_reducer';
import {todoReducer} from './reducers/todo_reducer';

const rootReducer = combineReducers({
    countReducer,
    todoReducer
})

exports.store = createStore(rootReducer, applyMiddleware(thunk, logger));

