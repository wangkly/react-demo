exports.mapStateToProps=(state)=>{
    return{
        userInfo:state.getIn(['userReducer','userInfo']),
    }
}