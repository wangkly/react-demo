import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';
import {queryData,delay} from 'services'

function* beforeAdd(action){
    // yield call(delay);
    let resp =yield call(queryData,{url:`querydata`});
    console.log('sage query **',resp);
    yield put(Object.assign({},{...action},{type:"ADD"}))
}

function* mySaga(){
    yield takeEvery("beforeADD",beforeAdd)
}

// function* mySaga(){
//     yield takeLatest("beforeADD",beforeAdd)
// }


export default mySaga;