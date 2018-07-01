import React, { Component } from 'react';


class AddPokemonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {},
            error: ''
        };
        this.handlePokemonSubmited = this.handlePokemonSubmited.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
    }
    handlePokemonSubmited(event) {
        event.preventDefault();
        event.target.reset();

        //Send Request to db...
        fetch(
            'http://localhost:5000/pokedex/create',
            {
                method:"POST",
                body: JSON.stringify(this.state.pokemon),
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            .then(data =>{console.log(data);})
            .then(pokemon => {
                this.props.rerenderApp();
            })
            .catch(err => console.log(err));
            
    }
    handleInputChanged(event) {
        let pokemon = this.state.pokemon;
        let inputParam = event.target.name;
        let inputValue = event.target.value;
        pokemon[inputParam] = inputValue;
        this.setState({
            pokemon
        });
    }
    render() {
        return (
            <form onSubmit={this.handlePokemonSubmited}>
                <div className='red-error'>{this.state.error}</div>
                <h2>Logged: </h2>
                <div className="form-group">
                    <label htmlFor="pokemonName">Pokemon Name</label>
                    <input type="text" onChange={this.handleInputChanged} name="pokemonName" className="form-control" id="pokemonName" aria-describedby="emailHelp" placeholder="Pokemon Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="pokemonImage">Pokemon Image</label>
                    <input type="text" onChange={this.handleInputChanged} name="pokemonImg" className="form-control" id="pokemonImage" placeholder="Pokemon Image" />
                </div>
                <div className="form-group">
                    <label htmlFor="pokemonInfo">Pokemon Info</label>
                    <input type="text" onChange={this.handleInputChanged} name="pokemonInfo" className="form-control" id="pokemonInfo" placeholder="Pokemon Info" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default AddPokemonForm;