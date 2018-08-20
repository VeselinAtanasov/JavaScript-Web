import React, { Component } from 'react';

export default class MoneyTrackerNavigator extends Component{

    render(){
        return (<div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-primary active">
                <button type="button" class="btn btn-primary">Button</button>
            </label>
            <label className="btn btn-primary">
                <button type="button" class="btn btn-primary">Button</button>
            </label>
            <label className="btn btn-primary">
                <button type="button" class="btn btn-primary">Button</button>
            </label>
        </div>);
    }
}