import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import {Button} from 'antd';

export default class Count extends Component{

    constructor(props){
        super(props);
    }


    render(){
        let { value, onIncreaseClick ,onDecreaseClick} = this.props
        return(
            <div className="main-container outer">
                <h1>{value}</h1>
                <Button.Group size={'large'}>
                    <Button type="primary" onClick={()=>onIncreaseClick()}>
                       +1
                    </Button>
                    <Button type="primary" onClick={()=>onDecreaseClick()}>
                        -1
                    </Button>
                </Button.Group>
            </div>
        )

    }


}

Count.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
  }


