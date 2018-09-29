const add = { type: 'ADD' }
const complete = { type: 'COMPLETE' }


exports.mapDispatchToProps=(dispatch,ownProps)=>{
    console.log('mapDispatchToProps==>ownProps',ownProps); // undefined
    return{
        addTodos:(param)=>dispatch(Object.assign({type:'beforeADD'},param)),
        completeTodos:(param)=>dispatch(Object.assign(complete,param))
    }
}