const add = { type: 'ADD' }
const complete = { type: 'COMPLETE' }


exports.mapDispatchToProps=(dispatch,ownProps)=>{
    console.log('mapDispatchToProps==>ownProps',ownProps); // undefined
    return{
        addTodos:(param)=>dispatch(Object.assign(add,param)),
        completeTodos:(param)=>dispatch(Object.assign(complete,param))
    }
}