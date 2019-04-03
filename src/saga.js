import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';
import {queryData,delay} from 'services'

function* beforeAdd(action){
    // yield call(delay);
    let resp =yield call(queryData,{url:`querydata`});
    console.log('sage query **',resp);
    yield put(Object.assign({},{...action},{type:"ADD"}))
}


function* initBanner(){
    let [banners,news] = yield [
        call(queryData,{url:'init-banner'}),
        call(queryData,{url:'init-news'})
    ]
    
    yield put({type:'initBanners',payload:banners.res})
    yield put({type:'initNews',payload:news.res.data})

}

function* mySaga(){
    yield takeEvery("beforeADD",beforeAdd)
    yield takeLatest('initBannerAndNews',initBanner)
}

// function* mySaga(){
//     yield takeLatest("beforeADD",beforeAdd)
// }


export default mySaga;