import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './style.css'
import useForm from '../../hooks/useForm';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

const TodoAppOld = () => {

    // const [state, dispatch] = useReducer(reducer, initialState, init);
    // const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

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

    const handleToogle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        if(description.trim().length<= 1){
                return;
        }
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            };
    
            const actionAñadirTodo = {
                type: 'add',
                payload: newTodo
            }
    
            dispatch(actionAñadirTodo);
            reset();
    }        
    


    return (
        <div>
            <h1>Todo App ( { todos.length} ) </h1>
            <hr />
            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                    {
                        todos.map((todo, i) => (
                            <li 
                            key={todo.id}
                            className= "list-group-item"
                            >
                                {/* <p className="text-center complete"> */}
                                <p 
                                className= {`${todo.done && 'complete'}`}
                                onClick={()=> handleToogle(todo.id)}
                                >
                                    {i+1}. {todo.desc}
                                </p>
                                <button className="btn btn-danger"
                                onClick={ ()=> handleDelete(todo.id) }
                                >
                                    Borrar
                                </button>
                            </li>
                        ))
                    }
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />

                    <form onSubmit= {handleSubmit}>
                        <input 
                            type="text"
                            name="description" 
                            value={description}                           
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default TodoAppOld
