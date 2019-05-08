import React,{Component} from 'react';
import {Button} from 'antd';
export default class FollowItem extends Component{

    render(){
        let {item} = this.props;
        return(
            <div className="follow-item">
                <div className="item-img">
                    <img src={item.headImg} alt="头像"/>
                </div>
                <div className="item-info">
                    <span>{item.nickName}</span>
                </div>
                {
                    item.following ?
                    <div className="item-opt">
                        <Button type="default" onClick={()=>this.unfollowUser(item._id)}>已关注</Button>
                    </div>
                    :
                    <div className="item-opt">
                        <Button type="primary" icon="plus" onClick={()=>this.followUser(item._id)}>关注</Button>
                    </div>
                }
            </div>
        )
    }


    followUser=(userId)=>{
        console.log('follow **',userId)
        let {follow} = this.props;
        follow({userId});
    }

    unfollowUser=(userId)=>{
        let {unfollow} = this.props;
        unfollow({userId})
    }
}