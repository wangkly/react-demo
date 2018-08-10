import React,{Component} from 'react';
import { Carousel } from 'antd';
export default class FrontPage extends Component{

    constructor(props){
        super(props)
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }

    render(){
        return(
            <Carousel afterChange={()=>this.onChange} autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
          </Carousel>
        )

    }


}