import {createStore, applyMiddleware} from 'redux';

import {combineReducers} from 'redux-immutable'

import createSagaMiddleware from 'redux-saga'

import mySaga from './saga'

import {createLogger} from "redux-logger";
const logger = createLogger();

import {countReducer} from './reducers/count_reducer';
import {todoReducer} from './reducers/todo_reducer';
import {HomeReducer} from './reducers/home-reducer';
import {ArticleReducer} from './reducers/article_reducer';
import {userReducer} from './reducers/user_reducer';
import {FollowReducer} from './reducers/follow_reducer';
 
const rootReducer = combineReducers({
    HomeReducer,
    countReducer,
    todoReducer,
    ArticleReducer,
    userReducer,
    FollowReducer
})

const sageMiddleware = createSagaMiddleware(mySaga);

exports.store = createStore(rootReducer, applyMiddleware(sageMiddleware,logger));


sageMiddleware.run(mySaga)