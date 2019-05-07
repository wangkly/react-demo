exports.mapStateToProps =(state)=>{
    return{
        follows:state.getIn(['FollowReducer','follows']),
        followers:state.getIn(['FollowReducer','followers'])
    }
}