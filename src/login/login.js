import React,{Component} from 'react';
import {Input,Form,Button,message} from 'antd';

class Login extends Component{


    render(){
        let {getFieldDecorator} = this.props.form;
        return(
            <div className="login-container">
            <div className="login-panel">
                <Form   onSubmit={this.handleFormSubmit} >
                        <Form.Item>
                            {
                                getFieldDecorator('account',{
                                    rules:[{
                                        type:'email',message:'请输入正确的邮箱地址',
                                    },{
                                        required:true,message:'请输入邮箱地址'
                                    }]
                                })(
                                    <Input placeholder="请输入邮箱地址"/>
                                )
                            }
                        </Form.Item>

                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    rules:[{
                                        required:true,message:'请输入密码'
                                    },{
                                        validator: this.validateToNextPassword,
                                    }] 
                                })(
                                    <Input type="password" placeholder="请输入密码"/>
                                )

                            }

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">登录</Button>  
                        </Form.Item>

                </Form>


            </div>
            </div>
        )
    }


    callback=(result)=>{
        let {err,res} = result;
        if(!err && res.success){
            message.success('登录成功');
            setTimeout(()=>{
                this.props.history.push("/home");
            },2000)
        }else{
            message.error(`登录失败:${res.errMsg}`);
        }

    }


    handleFormSubmit= (e)=>{
        e.preventDefault();
        let {login} = this.props;
        this.props.form.validateFields((err,values)=>{
                if(err){
                    console.log('err: ', err);    
                    return;
                }
           
            values.callback = this.callback;
            login(values);

        })

    }

}



export default Form.create()(Login)