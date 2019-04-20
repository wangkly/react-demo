import React,{Component} from 'react';
import BraftEditor from 'braft-editor'
import Comments from './components/comments';

export default class Article extends Component{


    componentDidMount(){
        let {init} = this.props;
        let {aid} =this.props.match.params;
        init(aid)
    }


    render(){

        let {article} = this.props;
        let  editorState = BraftEditor.createEditorState(article.content);
        let htmlString = editorState.toHTML()
        return(
            <div className="article-container">
                <div className="article-title"><h1>{article.title}</h1></div>
                <div  className="braft-output-content" dangerouslySetInnerHTML={{__html: htmlString }}></div>

                <Comments {...this.props}/>  
            </div>
        )

    }




}