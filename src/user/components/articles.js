import React,{Component} from 'react';
import Article from './article';

export default class Articles extends Component{

    render(){
        let {articles} = this.props;
        return(
            <div>
                 {
                    articles.map((item,index)=>{
                            return (<Article key={index} article={item}/>)
                        })    
                }
            </div>
        )
    }

}