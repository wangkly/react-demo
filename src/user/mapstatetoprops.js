exports.mapStateToProps =(state)=>{
    return{
        userInfo:state.getIn(['userReducer','userInfo']),
        articles:state.getIn(['userReducer','articles'])
    }
}