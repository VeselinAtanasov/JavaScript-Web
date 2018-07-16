import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/*
Use this approach when I do not need to use state
Instead of using all props I can extract only the needed data from props(in this example the properties age and name)
Also can use nesting in the routes the Router is attaching in props => props.match
*/
const Home = ({name,age}) => (
    <h1>
        Welcome to My App!
    </h1>
);

export default Home;