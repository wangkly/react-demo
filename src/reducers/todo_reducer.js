import {fromJS,List} from 'immutable';
let initialState = {todos:List()}

exports.todoReducer = (state = fromJS(initialState),action)=>{
    let todos;
    switch(action.type){
        case 'ADD':
            todos = state.get('todos').push({   
                key:Math.random(0,1000),
                id:action.id,
                text:action.text,
                complete:false
            })
            return state.set('todos',todos)
        break;
        case 'COMPLETE':
            todos = state.get('todos').map((todo)=>{
                if(todo.id == action.id){
                    todo.complete = true;
                }
                return todo;
            })
           return state.set('todos',todos)
               
        break;
        case 'DELETE':
            todos = state.get('todos').filter((todo)=>{return todo.id == action.id});
            return state.set('todos',todos)

        break;
        default:
        return state
       }



}