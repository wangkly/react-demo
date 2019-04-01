import "./style/index.less"
import React,{Component} from 'react';
import {render} from 'react-dom';
import {Provider}from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MyNavigator from './navigator';

import Counter from './count';
import CarouselExample from './carousel-example';
import Todos from './todo';
import Video from './video';

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
                            <div className="main-container">

                                <Route exact path="/" component={Todos} />
                                <Route exact path="/counter" component={Counter} />
                                <Route exact path="/carousel" component={CarouselExample} />
                                <Route exact path="/video" component={Video} />

                            </div>
                        </div>
                    </Router>

            </Provider>
        )
    }


}


render(<Index />, document.getElementById("react-content"));
