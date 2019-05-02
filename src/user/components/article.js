import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Icon} from 'antd';

export default class Article extends Component{

    constructor(props){
        super(props)
    }

    render(){
        let {article} = this.props;
        return(
            <div className="article-item">
                <Link to={`/article/${article._id}`}>
                    <h3>{article.title}</h3>
                </Link>
                    <span>{article.desc}</span>
                <div className="bottom-row">
                    {/* <span className="article-statistics"><Icon type="eye" theme="twoTone" style={{marginRight:3}}/>{article.comment||0}</span> */}
                    <span className="article-statistics"><Icon type="message" theme="twoTone" style={{marginRight:3}}/>{article.comment||0}</span>
                    <span className="article-statistics"><Icon type="heart" theme="twoTone" style={{marginRight:3}}/>{article.like||0}</span>
                </div>
            </div>
        )

    }


}