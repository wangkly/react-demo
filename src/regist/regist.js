import React,{Component} from 'react';
import {Form,Input,Row,Col,Button,message} from 'antd';
import {withRouter} from "react-router-dom";
import MyFetch from 'myfetch';

class Regist extends Component{

    constructor(props){
        super(props);
        this.state={
            validatecode:''
        }
        this.vcref = React.createRef();
    }


    componentDidMount(){
        // this.getValidateCode();
    }


    getValidateCode=()=>{
        MyFetch({url:'regist/validate-code'}).then((resp)=>{
            let {err,res} = resp;
            this.setState({
                validatecode:res.data||''
            })
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 6 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };

          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };

        return(
            <div className="regist-container">
            <div className="regist-form">
            <div className="top-logo">
                <img src={`${SERVER_HOST}public/logo.png`}  />
            </div>
                <Form  onSubmit={this.handleFormSubmit}>
                    <Form.Item label="邮箱地址" {...formItemLayout}>
                        {
                            getFieldDecorator('email',{
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

                    <Form.Item {...formItemLayout} label="密码">
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


                    <Form.Item {...formItemLayout} label="确认密码">
                        {
                            getFieldDecorator('repassword',{
                                rules:[{
                                    required:true,message:'请再次输入密码'
                                },{
                                    validator: this.compareToFirstPassword,
                                }]
                            })(
                                <Input type="password" placeholder="再次确认密码"/>
                            )
                        }
                    </Form.Item>


                    <Form.Item {...formItemLayout} label="验证码">
                        {
                            getFieldDecorator('vcode',{
                                rules:[{
                                    required:true,message:'请输入验证码'
                                }]
                            })(
                                <div className="validate-code">
                                    <Input  placeholder="请输入验证码"/>
                                    <a href="#" onClick={this.refreshVCode}>
                                       <img className="vcode" ref={this.vcref} src="http://localhost:3001/regist/validate-code?page=regist" alt="验证码"/>
                                    </a>
                                </div>
                            )
                        }
                    </Form.Item>    

                    <Form.Item >
                        <div className="bottom-btns">
                            <Button type="primary" htmlType="submit">注册</Button>    
                        </div>
                    </Form.Item>     

                </Form>

            </div>
            </div>
        )
    }

    refreshVCode=()=>{
        // console.log(this.vcref.current)
        this.vcref.current.src = 'http://localhost:3001/regist/validate-code?page=regist&d='+Math.random()
    }



    validateToNextPassword=(rule, value, callback)=>{
        const form = this.props.form;
        if(value){
            form.validateFields(['repassword'],{force:true})
        }
        callback();
    }


    compareToFirstPassword=(rule, value, callback)=>{
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不一致');
          } else {
            callback();
          }
    }


    callback=(result)=>{
        let {err,res} = result;
        if(!err && res.success){
            message.success('注册成功');
            setTimeout(()=>{
                this.props.history.push("/login");
            },2000)
        }else{
            message.error(`注册失败:${res.errMsg}`);
        }

        console.log('callback ** result',result)
    }


    handleFormSubmit= (e)=>{
        e.preventDefault();
        let {regist} = this.props;
        this.props.form.validateFields((err,values)=>{
                if(err){
                    console.log('err: ', err);    
                    return;
                }
            console.log('Received values of form: ', values);    
           
            values.callback = this.callback;

            regist(values);
        })

    }

}


export default Form.create()(withRouter(Regist))