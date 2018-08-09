import "./style/index.less"
import React,{Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

import {Provider}from 'react-redux';

import {countReducer} from './reducer';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import APP from './app';


export default class Index extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
        let store = createStore(countReducer);
        
        return(
            <Provider store={store} >
                    <Router>
                        <div>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                            <li>
                            <Link to="/topics">Topics</Link>
                            </li>
                        </ul>

                        <hr />

                        <Route exact path="/" component={APP} />
                        </div>
                    </Router>

            </Provider>
        )
    }


}


render(<Index />, document.getElementById("react-content"));
