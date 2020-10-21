import React,{useContext} from 'react'
import './TransactionList.css'
import {GlobalContext} from '../Context/GlobalState';
import Transaction from './Transaction'

function TransactionList() {
    const {transactions}=useContext(GlobalContext);
    // console.log(context);
    return (
        <div>
            <h3>History</h3>
             <ul  className="list">
                {transactions.map(transaction=>(
                       <Transaction key={Transaction.id} transaction={transaction}></Transaction>
                ))}
             </ul>
        </div>
    )
}

export default TransactionList
