
exports.mapDispatchToProps =(dispatch)=>{

    return{
        init:(id)=>dispatch({type:'GET-ARTICLE',id}),
        loadComments:(id)=>dispatch({type:'LoadComments',id}),
        addComments:(param)=>dispatch({type:'AddCommnets',...param}),
        like:(param)=>dispatch({type:'CommentsLike',...param}),
        dislike:(param)=>dispatch({type:'CommentsDislike',...param}),
        likeArticle:(param)=>dispatch({type:'likeArticle',...param}),
        checkFollow:(param)=>dispatch({type:'checkfollow' ,...param}),
        addFavorite:(param)=>dispatch({type:'addFavorite',...param}),
        follow:(param)=>dispatch({type:'follow' ,...param}),
        unfollow:(param)=>dispatch({type:'unfollow' ,...param})

    }
}