import "./style/index.less"
import React,{Component} from 'react';
import {render} from 'react-dom';
import {Provider}from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MyNavigator from './navigator';

import Counter from './count';
import FrontPage from './front-page';


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
                            <MyNavigator />
                            <Route exact path="/" component={FrontPage} />
                            <Route exact path="/counter" component={Counter} />
                        </div>
                    </Router>

            </Provider>
        )
    }


}


render(<Index />, document.getElementById("react-content"));
