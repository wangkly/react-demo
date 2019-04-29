exports.mapDispatchToProps=(dispatch)=>{
    return{
        updateUserHeadImg:(param)=>dispatch({type:'UpdateUserHeadImg',...param}),
        getUserInfo:(userId)=>dispatch({type:'UserInfo',userId}),
        updateUserInfo:(param)=>dispatch({type:'UpdateUserInfo',...param})
    }
}