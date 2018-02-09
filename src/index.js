import React,{Component} from 'react';
import {render} from 'react-dom';

export default class APP extends Component{ 
    constructor(props){
        super(props);
    }

    render() {
		return (
            <div>
                <h1>{'react-demo'}</h1>
            </div>
		)
    }
}

render(<APP />, document.getElementById("react-content"));
