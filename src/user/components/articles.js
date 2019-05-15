import React,{Component} from 'react';
import {Pagination} from 'antd';
import Article from './article';


export default class Articles extends Component{

    render(){
        let {articles,pageInfo} = this.props;
        console.log('articles ***',articles)
        console.log('pageInfo ***',pageInfo)
        return(
            <div>
                 {
                    articles.map((item,index)=>{
                            return (<Article key={index} article={item}/>)
                        })    
                }

                <div className="page-area">
                     <Pagination size="small"  current={pageInfo.pageNo} onChange={this.changePage} total={pageInfo.total} />
                </div>

            </div>
        )
    }


    changePage=(page)=>{
        let {getUserArticle,changePage,userInfo} = this.props;
        changePage({pageNo:page});
        getUserArticle(userInfo._id)
    }

}