exports.mapStateToProps = (state)=>{
    return {
        banners:state.getIn(['HomeReducer','banners']),
        news:state.getIn(['HomeReducer','news'])
    }
}