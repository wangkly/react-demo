import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';
import {queryData,delay,postTest,regist,login} from 'services';
// import MyFetch from 'myfetch';


function* beforeAdd(action){
    let resp = yield call(postTest,action);
    // let resp =yield call(queryData,{url:`querydata`});
    console.log('sage query **',resp);
    yield put(Object.assign({},{...resp},{type:"ADD"}))
}


function* initBanner(){
    let [banners,news] = yield [
        call(queryData,{url:'init-banner'}),
        call(queryData,{url:'init-news'})
    ]
    
    yield put({type:'initBanners',payload:banners.res})
    yield put({type:'initNews',payload:news.res.data})

}


function* registAccount(action){
    let resp = yield call(regist,action);
    action.callback && action.callback(resp)

}

function* userLogin(action){
    console.log('userLogin **',action)
    let resp = yield call(login,action);
}



function* mySaga(){
    yield takeEvery("beforeADD",beforeAdd)
    yield takeLatest('initBannerAndNews',initBanner);
    yield takeLatest('REGIST',registAccount);
    yield takeLatest('LOGIN',userLogin);

}

// function* mySaga(){
//     yield takeLatest("beforeADD",beforeAdd)
// }


export default mySaga;