import React from 'react';
import { Link } from 'react-router-dom';
/*
 * Instead of using <a href="/test"></a> we can use the built in Link functionality, which prevent the page to be refreshed
 */
const Navigation = () => (
    <div className ='menu'>
        My Navigation
        <br/>
        <br/>
        <Link to ='/home' >Home</Link>
        <Link to ='/add'>Add Food</Link>
        <Link to ='/all' className ='padding' >All Food </Link>
    </div>
);

export default Navigation;