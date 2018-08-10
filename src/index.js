import "./style/index.less"
import React,{Component} from 'react';
import {render} from 'react-dom';
import {Provider}from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Counter from './count';
import {store} from './store';

export default class Index extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
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

                        <Route exact path="/" component={Counter} />
                        </div>
                    </Router>

            </Provider>
        )
    }


}


render(<Index />, document.getElementById("react-content"));
