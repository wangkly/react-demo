import React,{Component, Children} from 'react';
import {List,Comment,Avatar,Tooltip,Icon} from 'antd';
import moment from 'moment';

export default class CommentList extends Component{

    render(){
        return(
            <div className='comment-list'>
                <List 
                    dataSource={this.props.comments}
                    itemLayout="horizontal"
                    renderItem={(item)=>this.renderItem(item)}
                />
            </div>
        )

    }


    renderItem=(item)=>{
        let children = []; 
        if(item.replies && item.replies.length > 0 ){
            children = item.replies.map((item)=>{
               return(
                   <Comment
                   key={item._id}        
                   actions={this.actions(item,false)}
                   author={item.author}
                   avatar={item.avatar}
                   content={item.content}
                   datetime={(
                       <Tooltip title={moment(item.datetime).format('YYYY-MM-DD HH:mm:ss')}>
                         <span>{moment(item.datetime).fromNow()}</span>
                       </Tooltip>
                     )} />
               )
            })   
        }

        return(
            <Comment
            key={item._id}         
            actions={this.actions(item)}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={(
                <Tooltip title={moment(item.datetime).format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment(item.datetime).fromNow()}</span>
                </Tooltip>
              )}>
              {children}
              </Comment>
        )
    }



     actions =(item,Repl=true)=>{
        
       let actions = [
            <span>
              <Tooltip title="Like">
                <Icon
                  type="like"
                  theme={'outlined'}
                  onClick={()=>this.like(item)}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>
                {item.like}
              </span>
            </span>,
            <span>
              <Tooltip title="Dislike">
                <Icon
                  type="dislike"
                  theme={'outlined'}
                  onClick={()=>this.dislike(item)}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>
                {item.dislike}
              </span>
            </span>
          ];

          if(Repl){
              actions.push(<span onClick={()=>{this.props.setRepliRef_id(item)}}>回复</span>)
          }

          return actions;

    } 


    like=(item)=>{
     let {like} = this.props;

      let param={
        article_id:item.article_id,
        id:item._id,
        repliRef_id:item.repliRef_id
      }
      like(param)
    }


    dislike =(item)=>{
      let {dislike} = this.props;
      let param={
        article_id:item.article_id,
        id:item._id,
        repliRef_id:item.repliRef_id
      }
      dislike(param)
    }


}