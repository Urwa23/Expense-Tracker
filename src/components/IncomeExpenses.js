import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';

import './IncomeExpense.css'
import Transaction from './Transaction';
function IncomeExpenses() {
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(transaction=>transaction.amount)

    // const income=amounts.filter(amount=>amount>0);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    // const incomeTotal = income.reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log(income)
    // console.log(income.amount)
    return (
        <div className="incomeexpense">
            <div  className="incomeexpense__moneyplus">
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div  className="incomeexpense__moneyminus">
                <h4>Expense</h4>
                <p  className="money minus">{Math.abs(expense)}</p>
            </div>
      </div>
        // </div>
    )
}

export default IncomeExpenses
