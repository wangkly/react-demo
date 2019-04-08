
import {Map} from 'immutable';

var initialState=Map({
    account:'',
    password:''
});

exports.RegistReducer = function(state=initialState,action){

    switch(action.type){
        case 'REGIST' :
        

        break;

        default:
            return state;
         break;   




    }


}