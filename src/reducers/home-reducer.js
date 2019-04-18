import {List,Map,fromJS} from 'immutable';

const initialState = Map({
    banners:[],
    news:[],
    pageInfo:{
        pageNo:0,
        pageSize:10
    }   
})

exports.HomeReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'initBanners':
            let banners = action.payload;
            return state.set('banners',banners)
        break;

        case 'initNews':
            let news = action.payload;
            return state.set('news',news)
        break;

        case 'setPageInfo':
            return state.set('pageInfo',action.payload);

        default:
            return state
        break;

    }


}