exports.todoReducer = (state={todos:[]},action)=>{

    switch(action.type){
        case 'ADD':
           return [
               ...state.todos,
               {
                   id:action.id,
                   text:action.text,
                   complete:false
               }
           ] 
            break;
        case 'COMPLETE':
           return 
               let newState = state.todos.map(v=>{
                    if(v.id == action.id){
                        v.complete =true;
                    }
                    return v;
               })
               return newState;
        break;
        case 'DELETE':
            return state.todos.filter(v=>v.id == action.id)
        break;
        default:
        return state
       }



}