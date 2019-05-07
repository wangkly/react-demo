//reducer
import {Map} from 'immutable';
const initialState=Map({
    follows:[],
    followers:[],
    followPage:{
        pageNo:1,
        pageSize:10,
        total:0
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
        case 'update-follow-page':
            let followPage = state.get('followPage');
            followPage.pageNo = action.pageNo
            return state.set('followPage',followPage) 
        default:
            return state
    }
}