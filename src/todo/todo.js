import React,{Component} from 'react';
import {Input, Button} from 'antd';

export default class TODO extends Component{


    render(){
        let {todos,addTodos,completeTodos} = this.props;
        return(
            <div>
                <span>你想要做什么？<Input style={{width:200}}/> <Button onClick={()=>addTodos()}>添加</Button></span>

               <div>
                   {
                       todos && todos.map(todo =>{
                            return <div> {todo.text} <Button onClick={()=>completeTodos()}>完成</Button></div>
                       })
                   }
                </div> 
            </div>
        )
    }

}