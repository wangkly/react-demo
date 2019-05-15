exports.mapStateToProps =(state)=>{
    return{
        userInfo:state.getIn(['userReducer','userInfo']),
        articles:state.getIn(['userReducer','articles']),
        pageInfo:state.getIn(['userReducer','pageInfo']),
        favoPageInfo:state.getIn(['userReducer','favoPageInfo']),
        favorites:state.getIn(['userReducer','favorites']),
        follows:state.getIn(['FollowReducer','follows']),
        followPage:state.getIn(['FollowReducer','followPage']),
        followers:state.getIn(['FollowReducer','followers']),
        followerPage:state.getIn(['FollowReducer','followerPage'])
    }
}