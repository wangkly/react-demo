//reducer
exports.countReducer = (state={count:0},action)=>{
    let count = state.count;
    switch(action.type){
        case 'increase':
            return {count:count+=1};
        case 'decrease':
        
            return {count:count-=1};
        default:
            return state

    }
}