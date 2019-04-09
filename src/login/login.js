import React,{Component} from 'react';
import {Input,Form,Button} from 'antd';

class Login extends Component{


    render(){
        let {getFieldDecorator} = this.props.form;
        return(
            <div className="login-container">
               <Form  className="login-form" onSubmit={this.handleFormSubmit} style={{'margin':'auto','marginTop':100}}>
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
        )
    }


    handleFormSubmit= (e)=>{
        e.preventDefault();
        let {login} = this.props;
        this.props.form.validateFields((err,values)=>{
                if(err){
                    console.log('err: ', err);    
                    return;
                }
            console.log('Received values of form: ', values);    
           

            login(values);

        })

    }

}



export default Form.create()(Login)