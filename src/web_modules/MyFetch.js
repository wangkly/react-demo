/**
 * fetch
 */
import objectAssign from 'object-assign';

 let MyFetch = function(param) {
    let {url = '',timeout = 10} = param;
    if(!url){
        throw new Error('request must have a url')
    }

    let req = {
        method:'GET',
        mode:'cors',
        credentials:'include',
        // headers:{
        //     'Content-type':'application/json'
        // }
    }

   let option = packReqParam(req,param);

    return  new Promise((resolve,reject)=>{
      let timeErr =  setTimeout(()=>{
            throw new Error('请求超时了');
        },timeout * 1000)

        fetch(url,option).then((response)=>{
            clearTimeout(timeErr);
            if(!response.ok){
               throw new Error('Network response was not ok.');
            }
            // if(response.headers.get("content-type") === "application/json"){
                return response.json();
            // }else{
            //     throw new Error('response expect be json.');
            // }
        }).then((json)=>{
            return resolve(json)
        }).catch((err)=>{
            clearTimeout(timeErr);
            reject(err)
        })
    })
 }


 function packReqParam(req,param){
    delete param['url'];
    delete param['timeout'];
    if(param && param['body'] && typeof param['body'] == 'object'){
        param['body'] = JSON.stringify(param['body'])
    }

    return objectAssign(req,param);
 }



 export default MyFetch;