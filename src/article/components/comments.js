import React,{Component } from 'react';
import {Row,Col,Button, Comment, Avatar, Form, Input,} from 'antd';
import CommentList from './comments-list';

import moment from 'moment';
const TextArea = Input.TextArea;


const Editor = ({
    onChange, onSubmit, submitting, value,
  }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} placeholder="说点什么吧" onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          提交
        </Button>
      </Form.Item>
    </div>
  );


export default class Comments extends Component {

    constructor(props){
        super(props)
        this.state={
            value:'',
            submitting:false,
            comments:[]
        }
    }


    handleTextChange =(e)=>{
        this.setState({
            value:e.target.value
        })
    }


    submitComments =()=>{
        let {value} = this.state;
        if(!value){
            return;
        }

        this.setState({
            submitting:true
        })

        setTimeout(()=>{
            this.setState({
                submitting: false,
                value: '',
                comments: [
                  {
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: <p>{this.state.value}</p>,
                    datetime: moment().fromNow(),
                  },
                  ...this.state.comments,
                ],

            })

        },1000)
    }


    render(){

        let {submitting,value,comments} =this.state;

        return(
            <div className="comments">
                {comments.length  > 0 && <CommentList comments={comments}/>}
                <Comment 
                    // avatar={(
                    //     <Avatar
                    //     src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    //     alt="Han Solo"
                    //     />
                    // )}
                   content={(
                        <Editor
                            onChange= {this.handleTextChange}
                            onSubmit={this.submitComments}
                            submitting={submitting}
                            value={value}
                        />
                   )}     
                />
            </div>
        )
    }



}