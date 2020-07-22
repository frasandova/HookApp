import React, { useEffect, useState } from 'react'
import Message from './Message';
import './SimpleForm.css';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    
    const {name, email } = formState;
    
    useEffect ( () => {
        console.log('hey');
    // });
    },[]);

    useEffect ( () => {
        console.log('formState cambio');
    // });
    },[formState]);

    useEffect ( () => {
        console.log('email cambio');
    // });
    },[email]);
    
    const handleInputChange = ({ target }) =>{
        // console.log('handleInputChange');
        // console.log(target.name);
        // console.log(target.value);

        setFormState({
            ...formState,
            [target.name] : target.value
        })

    }
        
    return (
        <>
           <h1>Use Effect</h1> 
           <hr/>
           <div className="form-group">
               <input 
                type="text"
                name ="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={ handleInputChange }
               />
               <input 
                type="text"
                name ="email"
                className="form-control"
                placeholder="Tu email"
                autoComplete="off"
                value={email}
                onChange={ handleInputChange }
               />               

                { name === '123' && <Message /> }               

           </div>
        </>
    )
}

export default SimpleForm
