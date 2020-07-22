import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm';
import './SimpleForm.css';

const FormWithCustomHook = () => {

    // const [formState, setFormState] = useForm({
    //     name: '',
    //     email: '',
    //     password:''
    // });
    // const {name, email, password } = formState;

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password:''
    });    
     const {name, email, password } = formValues; 
          
    useEffect( () => {
        console.log('email cambió');
    }, [email] );

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);

    }
    // const handleInputChange = ({ target }) =>{        

    //     setFormState({
    //         ...formState,
    //         [target.name] : target.value
    //     })

    // }
        
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
           <h1>FormWithCustomHook</h1> 
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
               <input 
                type="password"
                name ="password"
                className="form-control"
                placeholder="****"                
                value={password}
                onChange={ handleInputChange }
               />                
           </div>

           <button type="submit" className="btn btn-primary">
                Guardar
           </button>
        </form>
    )
}

export default FormWithCustomHook
