import React, { Component } from 'react';

class List extends Component {
    render() {
        let items = this.props.items || [];
        return (
            <ul>
                {items.map((e, index) => <li key={index}>{e.name}</li>)}
            </ul>
        );
    }
}

export default List;