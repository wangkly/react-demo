import MyFetch from '../myfetch';

exports.saveArticle = (param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'saveArticle',method:'POST',body:param}).then((res)=>{
            resolve(res);
        })
    })
}