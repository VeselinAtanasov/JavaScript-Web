import React ,{Component} from 'react';

export default class User extends Component{
    constructor(props){
        super(props);
        this.state={
            user:''
        };
        this.removeElement = this.removeElement.bind(this);
    }


    removeElement(){
        console.log(this.props)
        let id = this.props['_id'];
        this.props.removeElement(id);
    }

    render(){
        
        return(
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">User Details:</h5>
                        <button onClick={this.removeElement} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>
                            UserID: <strong> {this.props['_id']} </strong>
                        </p>
                        <p>
                            UserName: <strong> {this.props['username']} </strong>
                        </p>
                        <p>
                            UserEmail: <strong> {this.props['email']}</strong>
                        </p>
                        <p>
                            Is Admin: <strong>{this.props['_kmd']['roles'] ? "YES" : "NO"} </strong>
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Edit User</button>
                        <button type="button" className="btn btn-primary">Make It Admin</button>
                        <button type="button" className="btn btn-primary">Budget Tracker</button>
                    </div>
                </div>
            </div>
           
        );
    }
}
