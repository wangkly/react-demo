exports.todoReducer = (state={todos:[]},action)=>{
    
    switch(action.type){
        case 'ADD':
           return Object.assign({},state,{todos:[
            ...state.todos,
            {   
                key:Math.random(0,1000),
                id:action.id,
                text:action.text,
                complete:false
            }
        ]})  
            break;
        case 'COMPLETE':
           return Object.assign({},state,{
            todos:state.todos.map(v=>{
                if(v.id == action.id){
                    v.complete =true;
                }
                return v;
                })

           })
               
        break;
        case 'DELETE':
            return Object.assign({},state,{
                todos:state.todos.filter(v=>v.id == action.id)
            })
        break;
        default:
        return state
       }



}