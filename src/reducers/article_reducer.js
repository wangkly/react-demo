//reducer
import {Map} from 'immutable';
const initialState=Map({
    article:{}
})

exports.ArticleReducer = (state= initialState ,action)=>{
    
    switch(action.type){
        case 'article-init':
        return state.set('article',action.payload);
        // case 'decrease':
        //     return state.set('count',count-1)
        default:
            return state

    }
}