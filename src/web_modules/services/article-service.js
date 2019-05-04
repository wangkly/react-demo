import MyFetch from '../myfetch';

exports.saveArticle = (param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'saveArticle',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.getArticle = (param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'getArticle',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.likeArticleById = (param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'likeArticle',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.getUserArticles =(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'getUserArticles',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.getComments = (param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'getComments',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.saveComments = (param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'saveComments',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.likeComments =(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'comments/like',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}


exports.dislikeComments =(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'comments/dislike',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}