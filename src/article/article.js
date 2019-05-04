import React,{Component} from 'react';
import BraftEditor from 'braft-editor'
import {Icon,Button,message} from 'antd';
import {Link} from 'react-router-dom';
import MyFetch from 'myfetch';
import Comments from './components/comments';

export default class Article extends Component{


    componentDidMount(){
        let {init} = this.props;
        let {aid} =this.props.match.params;
        init(aid)
    }


    render(){

        let {article,userInfo} = this.props;
        let  editorState = BraftEditor.createEditorState(article.content);
        let htmlString = editorState.toHTML()
        return(
            <div className="article-container">
                <div className="article-title"><h1>{article.title}</h1></div>
                <div className="article-user">
                    <div className="header">
                    <Link to={`/user/${userInfo._id}`}>
                        <img src ={userInfo.headImg}/>
                    </Link>
                    </div>
                    <div className="user-info">
                        <div className="user-top">
                            <span>{userInfo.nickName||userInfo.account}</span>
                            <Button type="primary" icon="plus" size="small">关注</Button>
                            {/* <Icon type="heart" className="user-follow" theme="twoTone" twoToneColor="#eb2f96" /> */}
                        </div>
                        <span>{userInfo.nickName||userInfo.account}</span>
                    </div>
                </div>
                <div  className="braft-output-content" dangerouslySetInnerHTML={{__html: htmlString }}></div>
                <div className="bottom-row">
                    <Button type="primary" icon="heart" size="large" onClick={this.like}>点个赞</Button>
                </div>
                <Comments {...this.props}/>  
            </div>
        )

    }



    like=async ()=>{
        let {article,likeArticle} = this.props;
        let {err,res} = await MyFetch({url:'checkIfLogin'});
        if(!err && res.success){

           await likeArticle({articleId:article._id})

        }else{
            message.warning('请登录后操作');
        }
    }




}