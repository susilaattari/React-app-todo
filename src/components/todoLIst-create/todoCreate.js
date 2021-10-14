import './todoCreate.css'
import {useState} from "react";

const TodoCreat =(props)=>{

    const [getInputTodo, setInputTodo] = useState(' ')
    

    const hanadleSubmit = (event)=>{
        event.preventDefault()

        const newTodo ={
            id :Math.floor(Math.random()*100)+1,
            title : getInputTodo
        }

        props.onCreateTodo(newTodo)
        
        setInputTodo('')
    }

    const hendleInputTodo = (event) =>{
        setInputTodo(event.target.value)
    }

    return (
    <form className="todo-form" onSubmit={hanadleSubmit}>
        <input type="text" value={getInputTodo} onChange= {hendleInputTodo}/>
        <button type="submit">Add</button>
        
    </form>
    )
}

export default TodoCreat
