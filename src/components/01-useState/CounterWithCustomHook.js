import React from 'react'
import useCounter from '../../hooks/useCounter';
import './Counter.css';


const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset} = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr/>
            
            <button onClick= { ()=> decrement(2) } style={{padding:10}} className="btn btn-success">-1</button>
            <button onClick= { ()=> reset(100) } style={{padding:10}} className="btn btn-danger">Reset</button>
            <button onClick= { ()=> increment(2) } style={{padding:10}} className="btn btn-primary">+1</button>
        </>
    )
}

export default CounterWithCustomHook
