import MyFetch from '../MyFetch';

let queryData = function(param){
    return new Promise((resolve,reject)=>{
        MyFetch(param).then((res)=>{
            resolve(res)
        },(err)=>{
            reject(err)
        })
    })
}

export default queryData;
