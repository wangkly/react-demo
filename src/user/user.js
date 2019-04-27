import React,{Component} from 'react';
import {Button} from 'antd';
import Right from './components/right';

export default class User extends Component{

    constructor(props){
        super(props)
    }

    
    componentDidMount(){
        let {getUserInfo,getUserArticle} = this.props;
        let {userId} =this.props.match.params;

        getUserInfo(userId);
        getUserArticle(userId)
    }


    render(){
        return(
            <div className="user-container">
                <div className="user-top">
                    <div className="user-headimg">
                        <img src ="https://pic.qianmi.com/qmui/v0.2/img/avatar-default.png" />   
                    </div>

                    <div className="user-info">
                        <span className="user-name">wangkly</span>
                        <br></br>
                        <span className="user-desc">wangkly,wangkly</span>
                    </div>
                    
                    <div className="user-opts">
                        <Button type="gohst" >编辑个人资料</Button>
                    </div>

                </div>

                <div className="user-bottom">
                    <div className="left-panel">
                        left
                    </div>
                    <div className="right-panel">
                        <Right />
                    </div>
                </div>

            </div>
        )
    }


}