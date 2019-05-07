import React,{Component} from 'react';
import FollowItem from './follow-item';
import { Pagination } from 'antd';
export default class Follows extends Component{

    // componentDidMount(){
    //     let {queryFollows} = this.props;
    //     queryFollows({userId:'5cb41319eb86f516733d6175'})
    // }

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
                     <Pagination size="small"  current={followPage.pageNo} onChange={this.changePage} total={100||followPage.total} />
                </div>
            </div>
        )
    }


    changePage=(page)=>{
        console.log(page);
        let {changeFollowPage,queryFollows,userInfo,followPage} = this.props;
        changeFollowPage({pageNo:page});
        console.log('followPage ***',followPage)
        queryFollows({userId:userInfo._id});
    }

}