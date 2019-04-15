import React,{Component} from 'react';
import BraftEditor from 'braft-editor'
import {Row,Col,Button} from 'antd';
import 'braft-editor/dist/output.css'

export default class Article extends Component{


    componentDidMount(){
        let {init} = this.props;
        let {aid} =this.props.match.params;
        init(aid)
    }


    render(){

        let {article} = this.props;
        console.log('render article **',article)
        let  editorState = BraftEditor.createEditorState(article.content);
        let htmlString = editorState.toHTML()
        return(
            <div className="article-container">
                <div className="article-title"><h1>{article.title}</h1></div>
                <div  className="braft-output-content" dangerouslySetInnerHTML={{__html: htmlString }}></div>  
            </div>
        )

    }




}