import React,{Component} from 'react';
import {Button} from 'antd';

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

                    <div className="user-info">
                        <h2>wangkly</h2>
                        <h4>wangkly,wangkly</h4>
                    </div>
                    
                    <div className="user-opts">
                        <Button type="gohst" >编辑个人资料</Button>
                    </div>

                </div>
            </div>
        )
    }


}