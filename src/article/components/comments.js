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
            repliRef_id:'',//针对哪条评论进行的回复
        }
    }


    handleTextChange =(e)=>{
        this.setState({
            value:e.target.value
        })
    }


    submitComments = async ()=>{
        let {value,repliRef_id} = this.state;
        if(!value){
            return;
        }

        let {article,addComments} = this.props;

        this.setState({
            submitting:true
        })

        let param={
          article_id:article._id,
          repliRef_id:repliRef_id,
          content:value
        }

       let resp = await addComments(param);

        console.log('resp ***',resp)
        this.setState({
          submitting:false,
          value:'',
          repliRef_id:""
      })

    }

    setRepliRef_id=(repliRef_id)=>{
      //针对某条评论进行回复
      this.setState({
        repliRef_id:repliRef_id,
        })
    }


    render(){
        let {comments=[]} = this.props;
        let {submitting,value} =this.state;
        return(
            <div className="comments">
                {comments.length  > 0 && <CommentList comments={comments} setRepliRef_id={this.setRepliRef_id}/>}
                <Comment 
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