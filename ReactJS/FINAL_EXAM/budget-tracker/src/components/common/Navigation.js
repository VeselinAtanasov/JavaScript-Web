import React, { Component} from 'react';
import { Link,NavLink } from 'react-router-dom';

export default class Navigation extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink activeClassName="selected" className="navbar-brand" to="/">BudgetTracker</NavLink>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="selected" className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="selected" className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="selected" className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="selected" className="nav-link"to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}