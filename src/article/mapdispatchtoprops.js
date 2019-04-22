
exports.mapDispatchToProps =(dispatch)=>{

    return{
        init:(id)=>dispatch({type:'GET-ARTICLE',id}),
        loadComments:(id)=>dispatch({type:'LoadComments',id}),
        addComments:(param)=>dispatch({type:'AddCommnets',...param}),
        like:(param)=>dispatch({type:'CommentsLike',...param}),
        dislike:(param)=>dispatch({type:'CommentsDislike',...param}),
        
    }
}