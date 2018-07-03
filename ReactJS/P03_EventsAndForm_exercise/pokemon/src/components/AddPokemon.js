import React, { Component } from 'react';
import AddPokemonForm from './AddPokemonForm';
import PokemonRoster from './PokemonRoster';

class AddPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
        };
        this.rerenderApp = this.rerenderApp.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.renderRegister = this.renderRegister.bind(this);
    }

    componentDidMount() {
        fetch(
            'http://localhost:5000/pokedex/pokedex')
            .then(data => data.json())
            .then(allPokemons => {
                let pokemons = allPokemons.pokemonColection;
                this.setState({ pokemons });
            })
            .catch(err => console.log(err));
    }
    rerenderApp() {
        console.log('rerendering......')
        fetch(
            'http://localhost:5000/pokedex/pokedex')
            .then(data => data.json())
            .then(allPokemons => {
                let pokemons = allPokemons.pokemonColection;
                this.setState({ pokemons });
            })
            .catch(err => console.log(err));
    }
    getAllButtens() {
        return (<div>
            <button onClick={this.renderLogin}>[Login]</button>
            <button onClick={this.renderRegister}>[Register]</button>
        </div>);
    }
    renderLogin() {
        this.props.route('login');
    }
    renderRegister() {
        this.props.route('register');
    }

    render() {
        return (<div>
            {this.getAllButtens()}
            <br />
            <AddPokemonForm rerenderApp={this.rerenderApp} />
            <br />
            <PokemonRoster pokemons={this.state.pokemons} />
        </div>
        );
    }
};

export default AddPokemon;