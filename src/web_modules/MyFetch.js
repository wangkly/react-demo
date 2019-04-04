/**
 * fetch
 */
import objectAssign from 'object-assign';

const defaultOrigin='http://localhost:3001';

 let MyFetch = function(param) {
    let {url = '',timeout = 10} = param;

    if(!url){
        throw new Error('request must have a url')
    }

    if(!/^http|\/\//g.test(url)){
        url = `${defaultOrigin}/${url}`
    }

   let option = packReqParam(param);

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
            return resolve({res:json,err:null})
        }).catch((err)=>{
            clearTimeout(timeErr);
            reject({res:{},err:err})
        })
    })
 }


 function packReqParam(param){
    delete param['url'];
    delete param['timeout'];
    
    let req = {
        method:'GET',
        mode:'cors',
        credentials:'include',
        headers:{
            Accept: 'application/json; charset=utf-8',
            'Content-Type': 'application/json'
        }
    }


    if(param && param['body'] && typeof param['body'] == 'object'){
        param['body'] = JSON.stringify(param['body'])
    }

    let merge = objectAssign({},req,param);
    if(param.headers){
        merge.headers = objectAssign(req.headers,param.headers)
    }

    return merge;
 }





 export default MyFetch;