import React,{Component} from 'react';
import {Icon} from 'antd';
import emitter from 'emitter';
export default class Right extends Component{

    render(){
        let {followPage,followerPage} = this.props;
        return(
            <div>
                <div className="follow">
                    <div className="follow-panel">
                        <h3>关注了</h3>
                        <a className="num" href="#" onClick={this.selectFollowing}>{followPage.total || 0}</a>
                    </div>
                    <div className="split"></div>
                    <div className="follow-panel">
                        <h3>关注者</h3>
                        <a className="num" href="#" onClick={this.selectFollower}>{followerPage.total || 0}</a>
                    </div>

                </div>

                {/* <div className="user-opt">
                    <div className="opt-panel">
                    <Icon type="file-add" className="icon-write"/>
                       <br/>
                       <span>写文章</span>
                    </div>

                </div> */}

            </div>
        )
    }


    selectFollowing=()=>{
        let {queryFollows,userInfo,changeTab} = this.props;
        // queryFollows({userId:userInfo._id});
        changeTab('follows');
        emitter.emit('changeTab','follows');
    }


    selectFollower =()=>{
        let {queryFollowers,userInfo,changeTab} = this.props;
        // queryFollowers({userId:userInfo._id});
        changeTab('follows');
        emitter.emit('changeTab','followers');
    }


}