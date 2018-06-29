import React , {Component} from 'react';

class ItemForm extends Component {
    constructor(props){
        super(props);

        this.state={
            itemName:''
        };

        this.onInputChangedEvent =this.onInputChangedEvent.bind(this);
        this.onItemSaved =this.onItemSaved.bind(this);
    }

    onInputChangedEvent(event){
        this.setState({
            itemName: event.target.value
        });
    }
    onItemSaved(event){
        event.preventDefault();
        this.props.addItem(this.state.itemName);
    }
    render(){
        return  (
            <form onSubmit={this.onItemSaved}>
                Item Name:
                <input 
                    type="text"
                    name="name"
                    onChange={this.onInputChangedEvent}
                    value={this.state.itemName}
                />
                <br/>
                <input type="submit" />
            </form>
        );
    }
}

export default ItemForm;