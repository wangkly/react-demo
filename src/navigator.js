import React,{Component} from 'react';
import {Menu,Icon,Input} from 'antd';
import {Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;
import PropTypes from 'prop-types';
import MyFetch from 'myfetch';

import emitter from 'emitter';
export default class MyNavigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: 'home',
            login:false,
            userInfo:{}
          }
    }

    componentDidMount(){
        //检查登录状态
        // console.log(this.context.store)
        this.checkIfLogin();
        emitter.on('wlogin',this.checkIfLogin);
    }

    componentWillUnmount(){
        emitter.removeListener('wlogin',this.checkIfLogin)
    }

    checkIfLogin=()=>{
        MyFetch({url:'checkIfLogin'}).then((resp)=>{
            let {err,res} = resp;
            if(!err && res.success){
                //用户已登录
                this.setState({
                    login:true,
                    userInfo:res.data
                })
            }
        })
    }

    handleClick = (e) => {
        this.setState({
          current: e.key,
        });
      }

    render(){
        let {login,userInfo} = this.state;
        return(
            <div className="top">
                <div className="top-menu clearfix">
                <div className="logo">
                    <img src="/logo.png"  />
                </div>
                <div className="menu-bar">
                        <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        // theme="dark"
                        mode="horizontal">
                            <Menu.Item key="home">
                                <Link to="/">
                                <Icon type="home" />Home
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="todo">
                                <Link to="/todo">
                                    <Icon type="appstore" />Todos
                                </Link>
                            </Menu.Item>
                            <SubMenu title={<span><Icon type="setting" />settings</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">
                                        <Link to="/editor">
                                            EditorDemo
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="alipay">
                            <Link to="/counter">counter</Link>
                            </Menu.Item>

                            <Menu.Item key="video">
                            <Link to="/video">video</Link>
                            </Menu.Item>
                    </Menu>
                </div>
                <div className="top-search">
                    <Search 
                        placeholder="搜点什么吧"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />  
                </div>
                {
                    login ?
                    <div className="user-photo">
                    <Link to="/editor">
                        <img src= {userInfo.headImg||'https://pic.qianmi.com/qmui/v0.2/img/avatar-default.png'}/>
                    </Link>
                    </div>
                    :
                    <div className="opt-btn">
                        <Link to="/login">登录</Link>&nbsp;/&nbsp;<Link to="/regist">注册</Link>
                    </div>
                }
                </div>
            </div>
        )
    }


}

MyNavigator.contextTypes = {
    store: PropTypes.object
  };
