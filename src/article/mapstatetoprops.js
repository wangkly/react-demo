
exports.mapStateToProps =(state)=>{

    return{
        article:state.getIn(['ArticleReducer','article']),
        comments:state.getIn(['ArticleReducer','comments']),
        userInfo:state.getIn(['ArticleReducer','userInfo']),
        likefavo:state.getIn(['ArticleReducer','likefavo']),
    }

}