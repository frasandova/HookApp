import React, { useRef } from 'react';
import './FocusScreen.css'

const FocusScreen = () => {


  const inputRef = useRef();

  const handleClick = () => {    
    // document.querySelector('input').focus();
    // document.querySelector('input').select();
    
    console.log('inputRef', inputRef);
    inputRef.current.select();

  }

    return (
        <>
          <h1>Focus Screen</h1>
          <hr />

        <input
          id='nombre_id'
          name='nombre_name'
          ref={ inputRef }
          className = "form-control"
          placeholder="Su nombre"          
        />

        <button 
        className="btn btn-outline-primary mt-5"
        onClick= {handleClick}
        >
          Focus
        </button>

        </>
    )
}

export default FocusScreen
