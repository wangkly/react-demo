//reducer
import {Map} from 'immutable';
const initialState=Map({
    articles:[],
    userInfo:[],
    pageInfo:{
        pageNo:0,
        pageSize:10
    }   
})

exports.userReducer = (state= initialState ,action)=>{
    
    switch(action.type){
        case 'user-article-init':
        return state.set('articles',action.payload);
        case 'userInfo-set':
            return state.set('userInfo',action.payload);

        case 'userSetPageInfo':
        return state.set('pageInfo',action.payload);   
        default:
            return state

    }
}