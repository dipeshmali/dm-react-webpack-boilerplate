import React from 'react';
import { NavLink } from 'react-router-dom'; 

export const Header = () => {
    return (
        <div className="topnav">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/car" activeClassName="active">Car</NavLink>
            <NavLink to="/test" activeClassName="active">Test</NavLink>
        </div>
    )
}