import React, { Component } from 'react';
import SignUpForm from './components/sign-up-components/SignUpForm';
import LoginForm from './components/login-form/LoginForm';
import AddPokemonForm from './components/AddPokemon';
import './App.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: this.getInitialRout()
        };

        this.getCorrectPage = this.getCorrectPage.bind(this);
        this.saveRoute = this.saveRoute.bind(this);
    }
    getInitialRout() {
        if (localStorage.getItem('token')) {
            return 'loggedIn';
        }
        return 'register';
    }
    getCorrectPage() {
        if (this.state.route === 'login') {
            return (<LoginForm route={this.saveRoute} />);
        } else if (this.state.route === 'register') {
            return (<SignUpForm route={this.saveRoute} />);
        } else if (this.state.route === 'loggedIn') {
            return (<AddPokemonForm route={this.saveRoute} />);
        }
        else {
            return (<h1> ERROR 404 NOT FOUND </h1>);
        }
    }

    saveRoute(newRoute) {
        this.setState({
            route: newRoute
        });
    }
    render() {
        console.log(this.state.route)
        return (
            <div className="App">
                {this.getCorrectPage()}
            </div>
        );
    }
}

export default App;
