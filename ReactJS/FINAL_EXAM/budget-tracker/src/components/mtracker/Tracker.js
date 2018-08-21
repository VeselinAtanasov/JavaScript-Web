import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../resource/styles/Tracker.css';
export default class Tracker  extends Component{

    render(){
        return(
           

            <div className="col-md-4" >
                <div className="card text-white bg-primary">
                    <div className="card-body">
                        <blockquote className="card-blockquote">
                            <p>
                                <font >{this.props.trackerName}</font>
                            </p>
                            <img className="center" src={this.props.trackerUrl} alt="" />
                            <p></p>
                            <footer>
                                <cite title="Source Title"> {this.props.trackerDescription}</cite>
                            </footer>
                            <div className="pull-right">
                                { <Link to={`/trackDetails/${this.props['_id']}`} className="btn btn-info" >Have a look? </Link> }
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>

        );
    }
}