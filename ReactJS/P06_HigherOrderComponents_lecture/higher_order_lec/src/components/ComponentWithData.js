import React, { Component } from 'react';
import withLoading from './../helpers/withLoading';


class ComponentWithData extends Component {
    render() {
        console.log(this.props)
        return (
            <ul>
                {this.props.data.map((e) => <li key={e.id}>{e.name}</li>)}
            </ul>);
    }
}

ComponentWithData = withLoading(ComponentWithData);

export default ComponentWithData;

