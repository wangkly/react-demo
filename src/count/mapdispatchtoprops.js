// Action Creator
const increaseAction = { type: 'increase' }
const decreaseAction = { type: 'decrease' }

exports.mapDispatchToProps=(dispatch)=>{
    return{
        onIncreaseClick:()=>dispatch(increaseAction),
        onDecreaseClick:()=>dispatch(decreaseAction)
    }

}