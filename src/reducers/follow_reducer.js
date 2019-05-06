//reducer
import {Map} from 'immutable';
const initialState=Map({
    follows:[],
    followers:[],
    followPage:{
        pageNo:0,
        pageSize:10
    }   
})

exports.FollowReducer = (state= initialState ,action)=>{
    switch(action.type){
        case 'follows-init':
        return state.set('follows',action.payload);
        case 'followers-init':
            return state.set('followers',action.payload);
        case 'setFollowPage':
        return state.set('followPage',action.payload);   
        default:
            return state
    }
}