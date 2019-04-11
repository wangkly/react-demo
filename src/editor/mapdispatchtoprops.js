exports.mapDispatchToProps = (dispatch)=>{
    return{
        login:(param)=>dispatch(Object.assign({type:'LOGIN'},{...param}))
    }
}