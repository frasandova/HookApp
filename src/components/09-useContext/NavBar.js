import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="/">useContext</a> */}
        <Link className="navbar-brand" to='/'> useContext</Link>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink exact activeClassName="active" className="nav-item nav-link" to='/'> Home</NavLink>
            <NavLink exact activeClassName="active" className="nav-item nav-link" to='/about'> About</NavLink>
            <NavLink exact activeClassName="active" className="nav-item nav-link" to='/login'> Login</NavLink>
            {/* <a className="nav-item nav-link active" href="#">Home</a>            
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a> */}
            
            </div>
        </div>
        </nav>        
        // <nav>
        //     <ul>
        //         <li>Home
        //             <Link to='/'> Home</Link>
        //         </li>
        //         <li>Home
        //             <Link to='/about'> About</Link>
        //         </li>
        //         <li>Home
        //             <Link to='/login'> Login</Link>
        //         </li>
        //     </ul>
        // </nav>
    )
}
