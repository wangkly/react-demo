import "./style/index.less"
import React,{Component} from 'react';
import {render} from 'react-dom';
import {Provider}from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MyNavigator from './navigator';

import Counter from './count';
import Home from './home-page';
import Todos from './todo';
import Video from './video';
import Regist from './regist';
import Login from './login';
import Editor from './editor';
import User from './user';

import Article from './article';

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

                                <Route exact path="/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/todo" component={Todos} />
                                <Route exact path="/counter" component={Counter} />
                                <Route exact path="/video" component={Video} />
                                <Route exact path="/regist" component={Regist} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/editor" component={Editor} />
                                <Route exact path="/article/:aid" component={Article} />
                                <Route exact path="/user/:userId" component={User} />

                        </div>
                    </Router>

            </Provider>
        )
    }


}


render(<Index />, document.getElementById("react-content"));
