import React,{Component} from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import Follows from './components/follows';

export default class FollowsPanel extends Component{

    constructor(props){
        super(props);
        this.state={
            defaultActiveKey:'follows'
        }
    }

    componentDidMount(){
        let {type} =this.props.match.params;
        console.log('tab ',type)
        let {queryFollows} = this.props;
        queryFollows({userId:'5cb41319eb86f516733d6175'})
    }

    render(){
        return(
            <div className="follow-container">
                <Tabs defaultActiveKey="follows">
                    <TabPane tab="关注了" key="follows">
                        <Follows {...this.props}/>
                    </TabPane>
                    <TabPane tab="粉丝" key="followers">
                        followers
                    </TabPane>
                </Tabs>
            </div>
        )
    }

}