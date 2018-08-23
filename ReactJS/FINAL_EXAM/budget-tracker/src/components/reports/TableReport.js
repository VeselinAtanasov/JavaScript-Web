import React from 'react';

const TableReport = (props) =>{
    
    console.log(props);
    return(
        <table className="table">
        Current Expenses and Incomes:
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Food</th>
                    <th scope="col">Bills</th>
                    <th scope="col">Medicine</th>
                    <th scope="col">Transport</th>
                    <th scope="col">Clothing</th>
                    <th scope="col">Fun</th>
                    <th scope="col">Others</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.data.foodExpense}</td>
                    <td>{props.data.billsExpense}</td>
                    <td>{props.data.medicineExpense}</td>
                    <td>{props.data.transportExpense}</td>
                    <td>{props.data.clothingExpense}</td>
                    <td>{props.data.funExpense}</td>
                    <td>{props.data.otherExpense}</td>
                </tr>
            </tbody>
        </table>
    );};

export default TableReport;