import { useState } from 'react';


const useCounter = (initialState = 10) => {
    
    // const [state, setState] = useState(initialState)

    const [counter, setCounter] = useState(initialState); // 10

    const increment = (factor = 1) =>{        
        // setCounter(counter + factor );
        setCounter(counter + 1 );
    }

    const reset = () => {
        setCounter(initialState);
    }

    const decrement = (factor = 1) => {
        // setCounter(counter - factor);
        setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        reset,
        decrement
    }
}
export default useCounter
