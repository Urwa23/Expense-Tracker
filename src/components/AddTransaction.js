import React,{useState,useContext} from 'react'
import './AddTransaction.css'
import {GlobalContext} from '../Context/GlobalState';

function AddTransaction() {
    
    const {addTransaction}=useContext(GlobalContext)
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0)
    const onSubmitTransaction=(e)=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*10000000),
            text:text,
            amount:+amount
        }
        addTransaction(newTransaction)
    }
    return (
        <div>
            <h3>Add new transaction</h3>
                <form  onSubmit={onSubmitTransaction}  >
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
        </div>
    )
}

export default AddTransaction
