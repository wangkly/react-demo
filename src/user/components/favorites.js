import React,{Component} from 'react';
import {Pagination} from 'antd'
import Article from './article';

export default class Favorites extends Component{

    render(){
        let {favorites,favoPageInfo} = this.props;
        return(
            <div>
                 {
                    favorites.map((item,index)=>{
                            return (<Article key={index} article={item}/>)
                        })    
                }

                <div className="page-area">
                     <Pagination size="small"  current={favoPageInfo.pageNo} onChange={this.changePage} total={favoPageInfo.total} />
                </div>
            </div>
        )
    }


    changePage=(page)=>{
        let {queryFavo,userInfo,changeFavoPage} = this.props;
        changeFavoPage({pageNo:page})
        queryFavo({userId:userInfo._id})

    }

}