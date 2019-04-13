import React,{Component} from 'react';
import {Card,Row,Col} from 'antd';
const { Meta } = Card;

export default class News extends Component{

    render(){
        let {news} = this.props;
        console.log(news)
        return(
            <div className="bottom-area">
                <Row >
                {
                    news.map((item)=>{
                        return(
                            <Col span={6} key={item.id}>
                            <Card
                                hoverable
                                style={{ margin: 10  }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                <Meta
                                title={item.title}
                                description={item.content}
                                />
                            </Card>
                            </Col>
                        )
                    })

                }    

                </Row>
            </div>
        )
    }


}