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