//reducer
import {Map} from 'immutable';
const initialState=Map({
    count:0
})

exports.countReducer = (state= initialState ,action)=>{
    let count = state.get('count');
    switch(action.type){
        case 'increase':
        return state.set('count',count+1);
        case 'decrease':
            return state.set('count',count-1)
        default:
            return state

    }
}