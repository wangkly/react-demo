exports.mapStateToProps =(state)=>{
    return{
        userInfo:state.getIn(['userReducer','userInfo']),
        articles:state.getIn(['userReducer','articles']),
        follows:state.getIn(['FollowReducer','follows']),
        followPage:state.getIn(['FollowReducer','followPage']),
        followers:state.getIn(['FollowReducer','followers'])
    }
}