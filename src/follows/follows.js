import React,{Component} from 'react';

export default class Follows extends Component{

    componentDidMount(){
        let {queryFollows} = this.props;
        queryFollows({userId:'5cb41319eb86f516733d6175'})
    }

    render(){
        return(
            <div>
                follows
            </div>
        )
    }

}