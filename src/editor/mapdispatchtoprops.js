exports.mapDispatchToProps = (dispatch)=>{
    return{
        saveContent:(param)=>dispatch(Object.assign({type:'SAVECONTENT'},{...param}))

    }
}