import React,{Component} from 'react';
import {Button,Upload, Icon, message,Form,Input,Radio} from 'antd';
const RadioGroup =Radio.Group;
const FormItem = Form.Item;
const { TextArea } = Input;
class EditInfo extends Component{

    constructor(props){
        super(props)
    }


    render(){
        let {userInfo } = this.props;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };

        return(
            <Form  {...formItemLayout} onSubmit={this.handleFormSubmit} style={{margin: '20px 0'}} >
                        <FormItem label="性别">
                            {
                               getFieldDecorator('gender',{
                                    initialValue: userInfo.gender||'male',
                               })(
                                    <RadioGroup>
                                        <Radio value="male">男</Radio>
                                        <Radio value="female">女</Radio>
                                    </RadioGroup>
                               ) 
                            }    
                        </FormItem>

                        <FormItem label="昵称">
                            {
                                getFieldDecorator('nickName',{
                                    initialValue: userInfo.nickName||'',
                                })(
                                    <Input placeholder="给自己起个名称吧"/>
                            )}
                        </FormItem>

                        <FormItem label="自我简介">
                        {   
                            getFieldDecorator('desc',{
                                initialValue: userInfo.desc||'',
                            })(
                                <TextArea rows={4} placeholder="介绍一下自己吧"/>
                            )
                        }
                        </FormItem>

                        <FormItem  wrapperCol={{ xs: { span: 24 },sm: { span: 8 } ,offset: 8 }}>
                            <Button type="primary" htmlType="submit">确定</Button>
                        </FormItem>

                    </Form>
        )
    }



    handleFormSubmit=(e)=>{
        let {updateUserInfo,userInfo} = this.props;
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            updateUserInfo(Object.assign({},values,{userId:userInfo._id,callback:this.callback}))

          }
        });
    }


    callback=(result)=>{
        let {err,res} = result;
        if(!err && res.success){
            message.success('操作成功');
        }else{
            message.error(`操作失败:${res.errMsg}`);
        }
    }





}


export default Form.create()(EditInfo)