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

