import React from 'react';

const Tip = (props) => (
    <div className="alert alert-dismissible alert-warning">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <h4 className="alert-heading">Tip: #{props.index+1}</h4>
        <p className="mb-0">{props.value}</p>
    </div>


    // <div className="col-sm-12"  >
    //     <div className="card text-white bg-warning mb-3" >
    //         <div className="card-header"><strong>Tip: #{props.index+1}</strong></div>
    //         <div className="card-body">
    //             <h4 className="card-title">{props.value}</h4>
    //         </div>
    //     </div>
    // </div>
);

export default Tip;