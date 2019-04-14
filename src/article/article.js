import React,{Component} from 'react';

import {Row,Col,Button} from 'antd';


export default class Article extends Component{


    componentDidMount(){
        let {init} = this.props;
        let {aid} =this.props.match.params;
        init(aid)
    }


    render(){

        let {article} = this.props;
        console.log('render article **',article)

        return(
            <div className="article-container">
                <Row><h1>{article.title}</h1></Row>
                <Row>
                <div dangerouslySetInnerHTML={{__html: article.content }}></div>  
                </Row>
            </div>
        )

    }




}