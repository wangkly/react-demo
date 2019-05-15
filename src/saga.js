import {call,put,takeEvery,takeLatest,select} from 'redux-saga/effects';
import {queryData,delay,postTest,regist,
    login,saveArticle,getArticle,getComments,saveComments, 
    likeComments,
    dislikeComments,getUserInfos,
    getUserArticles,updateUserHeadImg,updateUser,
    likeArticleById,
    followTargetUser,
    checkfollowTargetUser,
    unfollowTargetUser,
    queryUserfollows,
    queryUserfollowers,
    queryfollowcount,
    getLikeFavoStatus,
    addFavoByArticleId,
    getUserFavo
} from 'services';
// import MyFetch from 'myfetch';


function* beforeAdd(action){
    let resp = yield call(postTest,action);
    // let resp =yield call(queryData,{url:`querydata`});
    console.log('sage query **',resp);
    yield put(Object.assign({},{...resp},{type:"ADD"}))
}


function* initBanner(){
    let {err,res} = yield call(queryData,{url:'init-banner'});
    if(!err && res.status){
        yield put({type:'initBanners',payload:res.data||[]})
    }
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
    yield put({type:'likefavostatus',id:action.id})
    //查文章的作者
    let userResp = yield call(getUserInfos,{userId:resp.res.data.userId})
    yield put({type:'article-user',payload:userResp.res.data});
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

function* getUserInfo(action){
    let {err,res} = yield call(getUserInfos,action);
    if(!err && res.success){
        yield put({type:'userInfo-set',payload:res.data})
    }
}

//获取用户的文章
function* getArticleByUser(action){
    let state = yield select();
    let pageInfo = state.getIn(['userReducer','pageInfo'])||{};
    // let articles = state.getIn(['userReducer','articles'])||[];
    let param ={
        userId:action.userId
    }

    let {err,res}  = yield call(getUserArticles,Object.assign(param,pageInfo));
    
    if(!err && res.success){
        // articles = articles.concat(res.data);
        pageInfo.total = res.data.total;
        console.log('saga ** pageInfo',pageInfo)
        yield put({type:'user-article-init',payload:res.data.articles})
        yield put({type:"userSetPageInfo",payload:pageInfo })

    }

}

function* updateUserImg(action){
   let {err,res} =  yield call(updateUserHeadImg,action)
    if(!err && res.success){
        let {userId} = action;
        yield put({type:'UserInfo',userId})
    }
}


function* updateUserInfo(action){
    let {err,res} = yield call(updateUser,action);

    if(!err && res.success){
        let {userId} = action;
        yield put({type:'UserInfo',userId})
        if(action.callback){
            action.callback({err,res})
        }
    }
}

function* likeThisArticle(action){
    let {err,res} = yield call(likeArticleById,action);
    if(action.callback){
        action.callback({err,res})
    }
}

//添加收藏
function* addFavorite(action){
    let {articleId} = action;
    let resp =yield call(addFavoByArticleId,{articleId})
    if(action.callback){
        action.callback(resp)
    }
}

//关注这个用户
function* followUser(action){
   let {userId,callback} = action;
   let resp = yield call(followTargetUser,{folUserId:userId})
   if(callback){
        callback(resp)
   }
}

//取消关注这个用户
function* unfollowUser(action){
   let {userId,callback} = action;
   let resp = yield call(unfollowTargetUser,{folUserId:userId})
   if(callback){
        callback(resp)
   }
}

//检查当前是否关注了这个用户
function* checkfollowUser(action){
   let {userId,callback} = action;
   let resp = yield call(checkfollowTargetUser,{folUserId:userId})
    if(callback){
        callback(resp)
    }
}

function* queryFollows(action){
   let {userId} = action;
   let state = yield select();
   let followPage = state.getIn(['FollowReducer','followPage'])||{};
   let {err,res} = yield call(queryUserfollows,{userId,...followPage})
   if(!err && res.success){
       yield put({type:'follows-init',payload:res.data.result||[]});
       followPage.total=res.data.total||0;
       yield put({type:'setFollowPage',payload:followPage});
   }
}



function* queryFollowers(action){
    let {userId} = action;
    let state = yield select();
    let followerPage = state.getIn(['FollowReducer','followerPage'])||{};
    let {err,res} = yield call(queryUserfollowers,{userId,...followerPage});
    if(!err && res.success){
        yield put({type:'followers-init',payload:res.data.result||[]});
        followerPage.total=res.data.total||0;
        yield put({type:'setFollowerPage',payload:followerPage});
    }
}

function* countFollows(action){
    let {userId} = action;
    let state = yield select();
    let followPage = state.getIn(['FollowReducer','followPage'])||{};
    let followerPage = state.getIn(['FollowReducer','followerPage'])||{};
    let {err,res}= yield call(queryfollowcount,{userId})
    if(!err && res.success){
        let {following = 0,follower = 0} = res.data;
        followPage.total=following||0;
        followerPage.total=follower||0;
        yield put({type:'setFollowPage',payload:followPage});
        yield put({type:'setFollowerPage',payload:followerPage})
    }

}

//获取当前登录用户对该文章的点赞和收藏情况
function* likeFavoStatus(action){
    let {id} = action;
    let {err,res} =yield call(getLikeFavoStatus,{articleId:id});
    if(!err && res.success){
        yield put({type:'init-likefavo',payload:res.data})
    }
}

//查询用户收藏
function* queryUserFavo(action){
    let {userId} = action;
    let state = yield select();
    let favoPageInfo = state.getIn(['userReducer','favoPageInfo'])||{}
    let {err,res} = yield call(getUserFavo,{userId,...favoPageInfo});
    if(!err && res.success){
        yield put({type:'favorites-init',payload:res.data.data});
        favoPageInfo.total = res.data.total;
        yield put({type:'setFavoPageInfo',payload:favoPageInfo})
    }

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
    yield takeLatest('UserInfo',getUserInfo);
    yield takeLatest('GetUserArticle',getArticleByUser);
    yield takeLatest('UpdateUserHeadImg',updateUserImg);
    yield takeLatest('UpdateUserInfo',updateUserInfo);
    yield takeLatest('likeArticle',likeThisArticle);
    yield takeLatest('addFavorite',addFavorite);
    yield takeLatest('query-favo',queryUserFavo);
    yield takeLatest('likefavostatus',likeFavoStatus);
    yield takeLatest('checkfollow',checkfollowUser);
    yield takeLatest('follow',followUser);
    yield takeLatest('unfollow',unfollowUser);
    yield takeLatest('follow-count',countFollows);
    yield takeLatest('query-follows',queryFollows);
    yield takeLatest('query-followers',queryFollowers);
}



export default mySaga;