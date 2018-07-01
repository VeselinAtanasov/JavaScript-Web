import React, { Component } from 'react';


class PokemonRoster extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let pokemons = this.props.pokemons;
        return (
            
                <div>
                    {pokemons.map(
                        (pokemon, index) => <img className="bordered" key={index} src={pokemon.pokemonImg} alt="Smiley face" height="120" width="120" />)}
                </div>
    
        );
    }
}

export default PokemonRoster;
