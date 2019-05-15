exports.mapDispatchToProps=(dispatch)=>{
    return{
        getUserInfo:(userId)=>dispatch({type:'UserInfo',userId}),
        getUserArticle:(userId)=>dispatch({type:'GetUserArticle',userId}),
        changePage:(param)=>dispatch({type:'update-page',...param}),
        updateUserHeadImg:(param)=>dispatch({type:'UpdateUserHeadImg',...param}),
        changeFollowPage:(param)=>dispatch({type:'update-follow-page',...param}),
        changeFollowerPage:(param)=>dispatch({type:'update-follower-page',...param}),
        queryFollows:(param)=>dispatch({type:'query-follows',...param}),
        queryFollowers:(param)=>dispatch({type:'query-followers',...param}),
        FollowCount:(userId)=>dispatch({type:'follow-count',userId}),
        follow:(param)=>dispatch({type:'follow' ,...param}),
        unfollow:(param)=>dispatch({type:'unfollow' ,...param}),
        queryFavo:(param)=>dispatch({type:'query-favo' ,...param}),
        changeFavoPage:(param)=>dispatch({type:'update-favo-page',...param}),
      
    }
}