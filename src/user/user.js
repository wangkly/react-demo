import React,{Component} from 'react';

export default class User extends Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="user-container">
                <div className="user-top">
                    <div className="user-headimg">
                        <img src ="https://pic.qianmi.com/qmui/v0.2/img/avatar-default.png" />   
                    </div>
                    
                </div>
            </div>
        )
    }


}