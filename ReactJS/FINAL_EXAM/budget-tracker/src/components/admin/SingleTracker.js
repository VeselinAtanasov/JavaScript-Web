import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import '../../resource/styles/Center.css'

export default class SingleTracker extends Component{
    constructor(props){
        super(props);

    }

    render(){
        
        return(

            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">BudgetTracker Name:<strong> {this.props.trackerName}</strong></h5>
                        <button onClick={this.removeElement} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>
                            <img className="center" src={this.props.trackerUrl} alt="" />
                        </p>
                        <p>
                         Description:  <strong>{this.props.trackerDescription}</strong>
                        </p>
                        <p>
                        UserId: <strong> {this.props['_acl']['creator']}</strong>
                        </p>
                    </div>
                    <div className="modal-footer">
                        <Link to={`/admin/editUser/${this.props['_id']}`}  className="badge badge-warning">Edit Tracker</Link>
                        <Link to={`/trackDetails/${this.props['_id']}`} className="badge badge-success" onClick={this.makeUserAdmin} >Check Details</Link>                      
                    </div>
                </div>
            </div>
        );
    }
}
