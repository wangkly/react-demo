
exports.mapStateToProps =(state)=>{

    return{
        article:state.getIn(['ArticleReducer','article']),
        comments:state.getIn(['ArticleReducer','comments'])
    }

}