

exports.mapDispatchToProps = (dispath,ownProps)=>{
    return{
        initBanner:()=>dispath({type:'initBanner'}),
        initContents:()=>dispath({type:'initContents'}),
        initPageInfo:()=>dispath({type:'initPageInfo'}),
    }
}