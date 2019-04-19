import React,{Component} from 'react';
import {List,Comment,Avatar} from 'antd';
import moment from 'moment';

export default class CommentList extends Component{

    render(){
        console.log('this.props.comments **',this.props.comments)
        return(
            <div className='comment-list'>
                <List 
                    dataSource={this.props.comments}
                    itemLayout="horizontal"
                    renderItem={(item)=>(
                        <Comment        
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}/>                        
                    )}
                />
            </div>
        )

    }



}