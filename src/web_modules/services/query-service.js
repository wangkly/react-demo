import MyFetch from '../myfetch';

exports.queryData = function(param){
        return new Promise((resolve,reject)=>{
            MyFetch(param).then((res)=>{
                resolve(res)
            },(err)=>{
                reject(err)
            })
        })
    }


exports.postTest = (param)=>{
    return new Promise((resolve)=>{
        MyFetch({url:'savetodo',method:'POST',body:param}).then((res)=>{
            resolve(res.res)
        })
    })
}    

exports.delay =function delay(){
    return new Promise((resolve)=>{
        setTimeout(
            ()=>{
                console.log('delay......')
                resolve()
            },1000)
    })
}


