import React,{Component} from 'react';
import {Card,Row,Col} from 'antd';
const { Meta } = Card;
import Article from './article';


import {withRouter} from "react-router-dom";

 class News extends Component{

    render(){
        let {news} = this.props;
        return(
            <div className="bottom-area">
                <Row >
                {
                    news.map((item,index)=>{
                        return(
                            // <Col span={6} key={item._id}>
                            // <Card
                            //     hoverable
                            //     onClick={()=>this.goToArticle(item._id)}
                            //     style={{ margin: 10  }}
                            //     cover={<img alt="example" src={item.cover || "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}>
                            //     <Meta
                            //     title={item.title}
                            //     // description={item.content}
                            //     />
                            // </Card>
                            // </Col>

                            <Article key={index} article={item}/>
                        )
                    })

                }    

                </Row>
            </div>
        )
    }

    goToArticle=(aid)=>{
            console.log('goToArticle ***',aid)
            this.props.history.push(`/article/${aid}`);
    }

}

export default withRouter(News)