import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/menu.css';

export default class Navigation extends Component{

    render(){
        return (
            <div id="menu">
                <div className="title">Navigation</div>
                <NavLink className="nav" to="/" activeClassName="active" data-target="Home">Home</NavLink>
                <NavLink className="nav" to="/catalog" activeClassName="active" data-target="Catalog">Catalog</NavLink>
                {/* <a className="nav" href="#" data-target="PostCreate">Create Post</a>
                <a className="nav" href="#" id="linkMyPosts" data-target="MyPosts">My Posts</a>
                <a className="nav" href="#" data-target="About">About</a> */}
            </div>
        );
    }

}