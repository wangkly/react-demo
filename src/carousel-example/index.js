import React,{Component} from 'react';
import { Carousel } from 'antd';
export default class CarouselExample extends Component{

    constructor(props){
        super(props)
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }

    render(){
        return(
            <Carousel autoplay afterChange={()=>this.onChange}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
          </Carousel>
        )

    }


}