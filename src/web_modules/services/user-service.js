import MyFetch from '../myfetch';

exports.getUserInfos=(param)=>{
        return new Promise((resolve)=>{
            MyFetch({url:'user-info',method:'POST',body:param}).then((res)=>{
                resolve(res);
            })
        })
}



exports.updateUserHeadImg=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'user-setImg',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.updateUser=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'user-update',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.followTargetUser=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'follow',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.unfollowTargetUser=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'unfollow',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}

//查看用户的关注
exports.queryUserfollows=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'query-follows',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}

//查看用户粉丝
exports.queryUserfollowers=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'query-followers',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}

//查询关注人数和粉丝人数
exports.queryfollowcount=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'follow-count',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}




exports.checkfollowTargetUser=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'check-follow',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


/**
 * 获取登录用户对文章的点赞和收藏情况
 */
exports.getLikeFavoStatus=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'like-favo',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}

/**
 * 查询用户收藏
 */
exports.getUserFavo=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'query-favo',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}

