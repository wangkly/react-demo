import {createStore, applyMiddleware,combineReducers} from 'redux';

import createSagaMiddleware from 'redux-saga'

import mySaga from './saga'

import {createLogger} from "redux-logger";
const logger = createLogger();

import {countReducer} from './reducers/count_reducer';
import {todoReducer} from './reducers/todo_reducer';

const rootReducer = combineReducers({
    countReducer,
    todoReducer
})

const sageMiddleware = createSagaMiddleware(mySaga);

exports.store = createStore(rootReducer, applyMiddleware(sageMiddleware,logger));


sageMiddleware.run(mySaga)