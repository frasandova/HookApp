import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
    // Link
} from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className="container">                
                <Switch>
                    <Route exact path ="/" component = { HomeScreen } />
                    <Route exact path ="/login" component = { LoginScreen } />                    
                    <Route exact path ="/about" component = { AboutScreen } />

                    <Route component = { HomeScreen } />
                    {/* <Redirect to ="/" /> */}
                </Switch>
                </div>
            </div>
        </Router>
    )
}
