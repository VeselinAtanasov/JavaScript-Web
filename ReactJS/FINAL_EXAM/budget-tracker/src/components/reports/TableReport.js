import React from 'react';
import '../../resource/styles/Table.css';

const TableReport = (props) =>(
    <div>
        <h3>Expense Statistics:</h3>
 
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Food</th>
                    <th scope="col">Bills</th>
                    <th scope="col">Medicine</th>
                    <th scope="col">Transport</th>
                    <th scope="col">Clothing</th>
                    <th scope="col">Fun</th>
                    <th scope="col">Others</th>
                    <th scope="col">Main Incomes</th>
                    <th scope="col">Other Incomes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.data.statistic.foodExpense}</td>
                    <td>{props.data.statistic.billsExpense}</td>
                    <td>{props.data.statistic.medicineExpense}</td>
                    <td>{props.data.statistic.transportExpense}</td>
                    <td>{props.data.statistic.clothingExpense}</td>
                    <td>{props.data.statistic.funExpense}</td>
                    <td>{props.data.statistic.otherExpense}</td>
                    <td>{props.data.walletIncomes}</td>
                    <td>{props.data.walletIncomes}</td>
                </tr>
            </tbody>
        </table>
        <button type="button" className="btn btn-secondary">Export in Excel</button>
    </div>
);

export default TableReport;