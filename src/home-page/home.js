import React,{Component} from 'react';
import { Carousel } from 'antd';
import News from './components/news'
export default class Home extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        let {initBannerAndNews} = this.props;
        initBannerAndNews();
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }

    render(){
        let {banners} = this.props;
        return(
            <div className="main-container">
                <div className="banner">
                    <Carousel  afterChange={()=>this.onChange} >
                        {
                            banners.map((banner)=>{
                                return(<div   key={banner.id}>
                                    <span>{banner.context}</span>
                                    {/* <a href={`/${banner.href}`} target="_blank">click me</a> */}
                                </div>) 
                            })
                        }
                    </Carousel>
                </div>

               <News {...this.props}/>     

            </div>
        )

    }


}