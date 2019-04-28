import React,{Component} from 'react';

export default class Article extends Component{

    constructor(props){
        super(props)
    }

    render(){
        let {article} = this.props;
        return(
            <div className="article-item">
                <h3>{article.title}</h3>
                <span>{article.desc}</span>
            </div>
        )

    }


}