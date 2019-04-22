import {call,put,takeEvery,takeLatest,select} from 'redux-saga/effects';
import {queryData,delay,postTest,regist,login,saveArticle,getArticle,getComments,saveComments, 
    likeComments,
    dislikeComments} from 'services';
// import MyFetch from 'myfetch';


function* beforeAdd(action){
    let resp = yield call(postTest,action);
    // let resp =yield call(queryData,{url:`querydata`});
    console.log('sage query **',resp);
    yield put(Object.assign({},{...resp},{type:"ADD"}))
}


function* initBanner(){
    let banners = yield call(queryData,{url:'init-banner'});
    yield put({type:'initBanners',payload:banners.res})
}


function* initContents(){
    let state = yield select();
    let pageInfo = state.getIn(['HomeReducer','pageInfo'])||{};
    let stateNews = state.getIn(['HomeReducer','news'])||[];
    let resp = yield call(queryData,{url:'init-news',body:pageInfo,method:'POST'});
    
    let {err,res} = resp;
    if(!err && res.success){
        stateNews = stateNews.concat(res.data);
        yield put({type:'initNews',payload:stateNews})
        if(res.data.length > 0){
            pageInfo.pageNo +=1;
            yield put({type:"setPageInfo",payload:pageInfo })
        }
    }
}


function* registAccount(action){
    let resp = yield call(regist,action);
    action.callback && action.callback(resp)

}

function* userLogin(action){
    let resp = yield call(login,action);
    action.callback && action.callback(resp)

}

function* saveContent(action){
    let resp = yield call(saveArticle,action);
    action.callback && action.callback(resp)
}


function* getArticleById(action){
    let resp = yield call(getArticle,action);
    yield put({type:'article-init',payload:resp.res.data});
    yield put({type:'LoadComments',id:action.id});

}

function* loadComments(action){
    let resp = yield  call(getComments,action);
    let {err,res} = resp;
    yield put({type:'comments-set',payload:res.data})
}


function* addComments(action){
    let resp = yield  call(saveComments,action);
    let {err,res} = resp;
    if(!err && res.success){
        yield put({type:'LoadComments',id:action.article_id});
    }else{
        action && action.callback(resp);
    }
}


function*  commentsLike(action){
    let resp = yield call(likeComments,action);
    yield put({type:'LoadComments',id:action.article_id});
}


function*  commentsDislike(action){
    let resp = yield call(dislikeComments,action);
    yield put({type:'LoadComments',id:action.article_id});

}



function* mySaga(){
    yield takeEvery("beforeADD",beforeAdd)
    yield takeLatest('initBanner',initBanner);
    yield takeLatest('initContents',initContents);
    yield takeLatest('REGIST',registAccount);
    yield takeLatest('LOGIN',userLogin);
    yield takeLatest('SAVECONTENT',saveContent);
    yield takeLatest('GET-ARTICLE',getArticleById);
    yield takeLatest('LoadComments',loadComments);
    yield takeLatest('AddCommnets',addComments);
    yield takeLatest('CommentsLike',commentsLike);
    yield takeLatest('CommentsDislike',commentsDislike);
}

// function* mySaga(){
//     yield takeLatest("beforeADD",beforeAdd)
// }


export default mySaga;