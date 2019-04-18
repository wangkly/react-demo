import React,{Component} from 'react';
import { Carousel } from 'antd';
import News from './components/news'
export default class Home extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        let {initBanner,initContents} = this.props;
        initBanner();
        initContents();
        let reactContent = document.getElementById('react-content');

        reactContent && reactContent.addEventListener('scroll',function(){
            if(reactContent.scrollTop+document.body.clientHeight + 1 > reactContent.scrollHeight){//滚动到距底部100
                console.log('触发分页*****');
                initContents();
            }
            // console.log('document.body.scrollTop **',reactContent.scrollTop);
            // console.log('document.body.scrollHeight **',reactContent.scrollHeight);
            // console.log('document.body.clientHeight **',document.body.clientHeight);
        })
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }

    render(){
        let {banners} = this.props;
        return(
            <div  className="main-container">
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