import React,{Component} from 'react';
import FollowItem from './follow-item';
import { Pagination } from 'antd';
export default class Followers extends Component{

    componentDidMount(){
        let {queryFollowers,userInfo} = this.props;
        queryFollowers({userId:userInfo._id});
    }

    render(){
        let {followers,followerPage} = this.props;
        return(
            <div>
                {
                    followers.map((item,index)=>{
                        return(
                            <FollowItem key={index} item={item} {...this.props} refreshData={this.refreshData}/>
                        )
                    })
                }
                <div className="page-area">
                     <Pagination size="small"  current={followerPage.pageNo} onChange={this.changePage} total={followerPage.total} />
                </div>
            </div>
        )
    }


    changePage=(page)=>{
        let {changeFollowerPage,queryFollowers,userInfo} = this.props;
        changeFollowerPage({pageNo:page});
        queryFollowers({userId:userInfo._id});
    }

    //刷新当前页的数据
    refreshData=()=>{
        let {queryFollowers,userInfo} = this.props
        queryFollowers({userId:userInfo._id});
    }

}