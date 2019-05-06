exports.mapDispatchToProps = (dispatch)=>{
    return{
        queryFollows:(param)=>dispatch({type:'query-follows',...param})
    }
}