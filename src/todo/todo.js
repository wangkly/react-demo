import React,{Component} from 'react';
import {Input, Button,Icon} from 'antd';
import PropTypes from 'prop-types';
export default class TODO extends Component{

    constructor(props){
        super(props);
        this.state={
            content:''
        }
    }

    changeContent=(e)=>{
        this.setState({
            content:e.target.value||''
        })
    }

    render(){
        let {todos,addTodos,completeTodos} = this.props;
        console.log('this.props==>',this.props)
        console.log(this.context.store)
        return(
            <div>
                <span>你想要做什么？<Input style={{width:200}} onChange={this.changeContent}/> <Button onClick={()=>addTodos({id:Math.random(0,1000),text:this.state.content,complete:false})}>添加</Button></span>

               <div>
                   {
                       todos && todos.map(todo =>{
                            return <div key={todo.key}> {todo.text} <Button onClick={()=>completeTodos({id:todo.id})}>完成</Button>{todo.complete ? <Icon type="check" /> :null}</div>
                       })
                   }
                </div> 
            </div>
        )
    }

}


TODO.contextTypes = {
    store: PropTypes.object
  };