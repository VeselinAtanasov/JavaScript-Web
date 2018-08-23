import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import '../../resource/styles/Center.css';

export default class SingleTracker extends Component{
    constructor(props){
        super(props);

        this.removeElement = this.removeElement.bind(this);

    }

    removeElement(){
        let trackerId = this.props['_id'];
        this.props.removeElement(trackerId);
    }

    render(){
        return(
            <div className="col-md-3" >
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
                        Virtual Wallet Status:
                                <li>Main incomes: {this.props.walletIncomes}</li>
                                <li>Other incomes {this.props.walletOthers}</li>
                            </p>
                            <p>
                        UserId: <strong> {this.props['_acl']['creator']}</strong>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <Link to={`/trackDetails/${this.props['_id']}`} className="badge badge-success"  >Check Details</Link>                      
                            <Link to={`/trackDetails/${this.props['_id']}`} className="badge badge-danger"  >Modify Virtual Wallet</Link>  
                            <Link to={`/admin/editTracker/${this.props['_id']}`}  className="badge badge-warning">Edit Tracker</Link>                    
                            <Link to={`/trackDetails/${this.props['_id']}`} className="badge badge-danger"  >Modify Expenses</Link>                      
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
