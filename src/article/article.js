import React,{Component} from 'react';
import BraftEditor from 'braft-editor'
import {Icon} from 'antd';
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
                        <img src ={userInfo.headImg}/>
                    </div>
                    <div className="user-info">
                        <div className="user-top">
                            <span>{userInfo.nickName||userInfo.account}</span>
                            <Icon type="heart" className="user-follow" theme="twoTone" twoToneColor="#eb2f96" />
                        </div>
                        <span>{userInfo.nickName||userInfo.account}</span>
                    </div>
                </div>
                <div  className="braft-output-content" dangerouslySetInnerHTML={{__html: htmlString }}></div>

                <Comments {...this.props}/>  
            </div>
        )

    }




}