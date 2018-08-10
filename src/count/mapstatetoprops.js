exports.mapStateToProps=(state)=>{
    return{
        value:state.countReducer.count
    }
}