import React,{Component} from 'react';
import {Tabs} from 'antd';
import Follows from './follows';
import Followers from './follower';
import emitter from 'emitter';

const TabPane = Tabs.TabPane;

export default class FollowWrap extends Component{

    constructor(props){
        super(props)
        this.state={
            activeKey:'follows'
        }
    }

    componentDidMount(){
        emitter.on('changeTab',this.changeTab)
    }

    componentWillUnmount(){
        emitter.off('changeTab',this.changeTab)
    }

    render(){
        return(
            <Tabs activeKey={this.state.activeKey} type="card" onChange={this.changeTab}>
                <TabPane tab="关注的人" key="follows">
                    <Follows {...this.props}/>
                </TabPane>
                <TabPane tab="关注者" key="followers">
                    <Followers {...this.props}/>
                </TabPane>
            </Tabs>
        )
    }



    changeTab=(key)=>{
        this.setState({
            activeKey:key
        })
    }

}