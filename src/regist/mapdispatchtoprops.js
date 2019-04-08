exports.mapDispatchToProps = (dispatch)=>{
    return{
        regist:(param)=>dispatch(Object.assign({type:'REGIST'},{...param}))
    }
}