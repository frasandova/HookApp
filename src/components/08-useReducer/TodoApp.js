import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './style.css'
// import useForm from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

const TodoApp = () => {

    // const [state, dispatch] = useReducer(reducer, initialState, init);
    // const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    const [todos, dispatch] = useReducer(todoReducer, [], init);



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = ( todoId ) => {

        console.log('handleDelete', todoId)        
        const actionDeleteTodo = {
            type: 'delete',
            payload: todoId
        }        
        dispatch(actionDeleteTodo);        
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });        
    }

    // const handleSubmit =  (e) => {
    //     e.preventDefault();
    //     if(description.trim().length<= 1){
    //             return;
    //     }
    //         const newTodo = {
    //             id: new Date().getTime(),
    //             desc: description,
    //             done: false
    //         };
    
    //         const actionAñadirTodo = {
    //             type: 'add',
    //             payload: newTodo
    //         }
    
    //         dispatch(actionAñadirTodo);
    //         reset();
    // }        
    


    return (
        <div>
            <h1>Todo App ( { todos.length} ) </h1>
            <hr />
            <div className="row">

                <div className="col-7">

                    <TodoList 
                        todos= {todos}
                        handleDelete = {handleDelete}
                        handleToggle = {handleToggle}
                    />
                </div>

                <div className="col-5">
                    <TodoAdd 
                    handleAddTodo = { handleAddTodo }
                    />
                </div>
            </div>

        </div>
    )
}

export default TodoApp
