exports.mapStateToProps=(state)=>{
    return{
        value:state.getIn(['countReducer','count'])
    }
}