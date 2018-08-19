import React, { Component } from 'react';
import observer from '../../infrastructure/observer/observer';
import '../../styles/notifications.css';

const DEFAULT_STATE = {
    message: '',
    success: '',
    error: '',
    loading: ''
};

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;

        this.showNotification = this.showNotification.bind(this);
        this.hideNotification = this.hideNotification.bind(this);
        observer.subscriber(observer.events.notification, this.showNotification);
    }

    showNotification(data) {
      
        let type = data.type;
      
        this.setState({
            message: data.message,
            [type]: true
        });
     
    }

    hideNotification(event) {
        this.setState(DEFAULT_STATE);
    }

    render() {
        if (this.state.success) {
          
            return (<div onClick={this.hideNotification} id="infoBox" className="notification"><span>{this.state.message}</span></div>);
        } else if (this.state.error) {

            return (<div onClick={this.hideNotification} id="errorBox" className="notification"><span>{this.state.message}</span></div>);
        } else if (this.state.loading) {
            return (<div onClick={this.hideNotification} id="loadingBox" className="notification"><span>{this.state.message}</span></div>);
        } else {

            return null;
        }

    }

}