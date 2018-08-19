import React, { Component } from 'react';
import './App.css';
import './styles/site.css';
import Header from './components/common/Header';
import {Route} from 'react-router-dom';
import Home from './components/home/Home';
import Notification from './components/common/Notification';
import Logout from './components/user/Logout';
import Catalog from './components/catalog/Catalog';

class App extends Component {
    render() {
        return (
            <div className="App">
                <main className="content">
                    <Header/>
                    <Notification />
                    <Route path="/" exact component ={Home} />
                    <Route path="/logout"  component ={Logout} />
                    <Route path="/catalog"  component ={Catalog} />
                </main>
            </div>
        );
    }
}

export default App;
