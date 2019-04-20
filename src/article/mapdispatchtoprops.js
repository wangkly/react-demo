
exports.mapDispatchToProps =(dispatch)=>{

    return{
        init:(id)=>dispatch({type:'GET-ARTICLE',id}),
        loadComments:(id)=>dispatch({type:'LoadComments',id}),
        addComments:(param)=>dispatch({type:'AddCommnets',...param}),
        like:(id,repliRef_id)=>dispatch({type:'like',id,repliRef_id}),
        dislike:(id,repliRef_id)=>dispatch({type:'dislike',id,repliRef_id}),
        
    }
}