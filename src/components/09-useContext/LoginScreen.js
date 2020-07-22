import React, { useContext } from 'react'
import { UserContext } from './UserContext'

// 1. Obtener la referencia al userContext
// 2. setUser

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)

    const handleSetUser = () => {
        setUser({
            id:123,
            name:'Francisco'
        });
    }
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
            className="btn btn-primary"
            onClick={handleSetUser}            
            >Login
            </button>
        </div>
    )
}
