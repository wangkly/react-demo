import MyFetch from '../myfetch';

exports.regist=(param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'regist',method:'POST',body:param}).then((resp)=>{
            resolve(resp)
        })
    })
}