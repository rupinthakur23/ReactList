import React from 'react';

const Todos = (props) =>{
    const { todos, deleteTodo } =props;
    const todoList = todos.length>0? todos.map(todo => {
        return (
            <div className="collection-item" key={todo.id}>
            <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>

            </div>
        )
    }): (<p className="center">You Don't have any Todo</p>)
    return(
     <div className="todos collection">
     {todoList}
     </div>


    )
}

export default Todos;