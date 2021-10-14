import './todo.css'
import {useState}  from "react";
import ListTodo from "../todo-list/todoList";
import TodoCreate from "../todoLIst-create/todoCreate"


const Todo = (props) => {

    const [getTodos,setTodos] = useState([
        {id: 1, title: "ikan"},
        {id: 2, title: "ayam"},
        {id: 3, title: "sayur"}
    ])



    const evenListTodo = (todo) =>{
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={evenListTodo}/>
           <ListTodo datatodos={getTodos}/>
        </div>
    )
}

export default Todo