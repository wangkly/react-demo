import MyFetch from '../MyFetch';

exports.queryData = function(param){
        return new Promise((resolve,reject)=>{
            MyFetch(param).then((res)=>{
                resolve(res)
            },(err)=>{
                reject(err)
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


