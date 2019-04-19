//reducer
import {Map} from 'immutable';
const initialState=Map({
    article:{},
    comments:[]
})

exports.ArticleReducer = (state= initialState ,action)=>{
    
    switch(action.type){
        case 'article-init':
        return state.set('article',action.payload);
        case 'comments-set':
            return state.set('comments',action.payload)
        default:
            return state

    }
}