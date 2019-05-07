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
                <div className="item-opt">
                    <Button type="primary" icon="plus" >关注</Button>
                </div>
            </div>
        )
    }
}