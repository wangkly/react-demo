import {List,Map,fromJS} from 'immutable';

const initialState = Map({
    banners:[],
    news:[]
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

        default:
            return state
        break;

    }


}