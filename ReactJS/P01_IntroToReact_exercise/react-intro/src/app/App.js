import React from 'react';
import './style/app.css';
import '../index.css';
import database from './contacts.json';
import rerender from '../index.js';

let dbIndex = 0;
function getContact(data, index) {
    return (<div className="contact" key={index} data-id="id" onClick={selectDetailsContact.bind(this,index)}>
        <span className="avatar small">&#9787;</span>
        <span className="title">{data.firstName} {data.lastName}</span>
    </div>);
};

let renderList = () => {
    const users = [];
    for (let i = 0; i < database.length; i++) {
        let contact = database[i];
        users.push(getContact(contact, i));
    }
    return users;
};

function getDetails(contact) {
    return (
        <div className="content">
            <div className="info">
                <div className="col">
                    <span className="avatar">&#9787;</span>
                </div>
                <div className="col">
                    <span className="name">{contact.firstName}</span>
                    <span className="name">{contact.lastName}</span>
                </div>
            </div>
            <div className="info">
                <span className="info-line">☎ {contact.phone}</span>
                <span className="info-line">&#9993; {contact.email}</span>
            </div>
        </div>
    );

}

let selectDetailsContact = (index) => {
    dbIndex = index;
    rerender(App(), document.getElementById('root'));
};

const App = () => (
    <div className="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    {/*database.map(getContact)*/}
                    {renderList()}
                </div>
            </div>
            <div id="details">
                <h1>Details</h1>
                {getDetails(database[dbIndex])}
            </div>
        </div>
        <footer>Contact Book SPA &copy; 2017</footer>
    </div>
);
export default App;
