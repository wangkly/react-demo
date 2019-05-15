//reducer
import {Map} from 'immutable';
const initialState=Map({
    articles:[],
    userInfo:[],
    pageInfo:{
        pageNo:1,
        pageSize:10,
        total:0
    },
    favorites:[],
    favoPageInfo:{
        pageNo:1,
        pageSize:10,
        total:0 
    }   
})

exports.userReducer = (state= initialState ,action)=>{
    
    switch(action.type){
        case 'user-article-init':
        return state.set('articles',action.payload);

        case 'favorites-init':
        return state.set('favorites',action.payload);

        case 'userInfo-set':
            return state.set('userInfo',action.payload);

        case 'userSetPageInfo':
            return state.set('pageInfo',action.payload);   

        case 'update-page':
            let pageInfo = state.get('pageInfo');
            pageInfo.pageNo = action.pageNo
            return state.set('pageInfo',pageInfo) 

        case 'setFavoPageInfo':
        return state.set('favoPageInfo',action.payload); 

        case 'update-favo-page':
            let favoPageInfo = state.get('favoPageInfo');
            favoPageInfo.pageNo = action.pageNo
            return state.set('favoPageInfo',favoPageInfo) 
          
        default:
            return state

    }
}