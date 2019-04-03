

exports.mapDispatchToProps = (dispath,ownProps)=>{
    return{
        initBannerAndNews:()=>dispath({type:'initBannerAndNews'}),
    }
}