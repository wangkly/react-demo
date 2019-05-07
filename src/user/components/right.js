import React,{Component} from 'react';
import {Icon} from 'antd';

export default class Right extends Component{

    render(){

        return(
            <div>
                <div className="follow">
                    <div className="follow-panel">
                        <h3>关注了</h3>
                        <a href="#" onClick={this.selectFollowing}>0</a>
                    </div>
                    <div className="split"></div>
                    <div className="follow-panel">
                        <h3>关注者</h3>
                        <a href="#" onClick={this.selectFollower}>0</a>
                    </div>

                </div>

                <div className="user-opt">
                    <div className="opt-panel">
                    <Icon type="file-add" className="icon-write"/>
                       <br/>
                       <span>写文章</span>
                    </div>

                </div>

            </div>
        )
    }


    selectFollowing=()=>{
        let {queryFollows,userInfo,changeTab} = this.props;
        queryFollows({userId:userInfo._id});
        changeTab('follows');
    }


    selectFollower =()=>{
        let {queryFollowers,userInfo,changeTab} = this.props;
        queryFollowers({userId:userInfo._id});
        changeTab('follows');
    }


}