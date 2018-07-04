import React, { Component } from 'react';
import WithLoading from './WithLoading';

class Home extends Component {

    render() {
        return(<div>
            <ul>
                {this.props.name}
                {this.props.data.map(
                    (e,index) => <li key={e.id}> {e.name} </li>)}
            
            </ul>
        </div> );
    } 
}

Home = WithLoading(Home);

export default Home;