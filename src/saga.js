import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';

function delay(){
    return new Promise((resolve)=>{
        setTimeout(
            ()=>{
                console.log('delay......')
                resolve()
            },2000)
    })
}

function* beforeAdd(action){
    yield call(delay);
    console.log('actionXXX==>',action)
    yield put(Object.assign({},{...action},{type:"ADD"}))
}

function* mySaga(){
    yield takeEvery("beforeADD",beforeAdd)
}

// function* mySaga(){
//     yield takeLatest("beforeADD",beforeAdd)
// }


export default mySaga;