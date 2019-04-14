
exports.mapStateToProps =(state)=>{

    return{
        article:state.getIn(['ArticleReducer','article'])
    }

}