//reducer
import {Map} from 'immutable';
const initialState=Map({
    articles:{},
    userInfo:[]
})

exports.userReducer = (state= initialState ,action)=>{
    
    switch(action.type){
        case 'article-init':
        return state.set('articles',action.payload);
        case 'userInfo-set':
            return state.set('userInfo',action.payload)
        default:
            return state

    }
}