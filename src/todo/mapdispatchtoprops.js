const add = { type: 'ADD' }
const complete = { type: 'COMPLETE' }


exports.mapDispatchToProps=()=>{
    return{
        addTodos:()=>dispatch(add),
        completeTodos:()=>dispatch(complete)
    }
}