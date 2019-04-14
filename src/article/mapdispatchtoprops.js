
exports.mapDispatchToProps =(dispatch)=>{

    return{
        init:(id)=>dispatch({type:'GET-ARTICLE',id})
    }
}