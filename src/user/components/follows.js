import React,{Component} from 'react';
import FollowItem from './follow-item';
import { Pagination } from 'antd';
export default class Follows extends Component{

    componentDidMount(){
        let {queryFollows,userInfo} = this.props;
        queryFollows({userId:userInfo._id});
    }

    render(){
        let {follows,followPage} = this.props;
        return(
            <div>
                {
                    follows.map((item,index)=>{
                        return(
                            <FollowItem key={index} item={item}/>
                        )
                    })
                }
                <div className="page-area">
                     <Pagination size="small"  current={followPage.pageNo} onChange={this.changePage} total={followPage.total} />
                </div>
            </div>
        )
    }


    changePage=(page)=>{
        let {changeFollowPage,queryFollows,userInfo} = this.props;
        changeFollowPage({pageNo:page});
        queryFollows({userId:userInfo._id});
    }

}