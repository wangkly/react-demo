exports.mapDispatchToProps=(dispatch)=>{
    return{
        getUserInfo:(userId)=>dispatch({type:'UserInfo',userId}),
        getUserArticle:(userId)=>dispatch({type:'GetUserArticle',userId})
    }
}