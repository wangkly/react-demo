import "./style/index.less"
import React,{Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

import {Provider}from 'react-redux';

import {countReducer} from './reducer';

import Counter from './count';



export default class APP extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
        let store = createStore(countReducer);
        
        return(
            <Provider store={store} >
                <Counter />
            </Provider>
        )
    }


}


render(<APP />, document.getElementById("react-content"));
