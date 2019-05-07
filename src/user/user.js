import React,{Component} from 'react';
import { Tabs } from 'antd';
import Right from './components/right';
import Articles from './components/articles';
import UserInfo from './components/user-info';
import Follows from './components/follows';
const TabPane = Tabs.TabPane;

export default class User extends Component{

    constructor(props){
        super(props);
        this.state={
            activeKey:'article'
        }
    }

    
    componentDidMount(){
        let {getUserInfo,getUserArticle} = this.props;
        let {userId} =this.props.match.params;
        getUserInfo(userId);
        getUserArticle(userId);

        let reactContent = document.getElementById('react-content');
        reactContent && reactContent.addEventListener('scroll',this.reactContentScroll)
    }


    componentWillUnmount(){
        let reactContent = document.getElementById('react-content');
        reactContent && reactContent.removeEventListener('scroll',this.reactContentScroll)
    }


    reactContentScroll = ()=>{
        let {getUserArticle} = this.props;
        let {userId} =this.props.match.params;
        let reactContent = document.getElementById('react-content');
        if(reactContent.scrollTop+document.body.clientHeight + 1 > reactContent.scrollHeight){//滚动到距底部100
            getUserArticle(userId);
        }
    }



    render(){
        let {userInfo,articles,updateUserHeadImg} = this.props;
        let {userId} =this.props.match.params;
        return(
            <div className="user-container">
                <UserInfo userInfo={userInfo} userId={userId} updateUserHeadImg={updateUserHeadImg}/>

                <div className="user-bottom">
                    <div className="left-panel">
                        <Tabs activeKey={this.state.activeKey} onChange={this.changeTab}>
                            <TabPane tab="文章" key="article">
                                <Articles articles={articles}/>
                            </TabPane>
                            <TabPane tab="关注" key="follows">
                                <Follows {...this.props}/>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="right-panel">
                        <Right changeTab={this.changeTab} {...this.props}/>
                    </div>
                </div>

            </div>
        )
    }


    changeTab=(tabkey)=>{
        this.setState({
            activeKey:tabkey
        })
    }


}