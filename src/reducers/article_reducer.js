//reducer
import {Map} from 'immutable';
const initialState=Map({
    article:{},
    comments:[],
    userInfo:{},
    likefavo:{}
})

exports.ArticleReducer = (state= initialState ,action)=>{
    
    switch(action.type){
        case 'article-init':
        return state.set('article',action.payload);
        case 'comments-set':
            return state.set('comments',action.payload);
        case 'article-user':
        return state.set('userInfo',action.payload);
        case 'init-likefavo':
        return state.set('likefavo',action.payload);

        default:
            return state

    }
}