import React, {useState} from 'react';

import "./App.css";
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import {GlobalProvider} from './Context/GlobalState'
// import AddTranscation  from './components/AddTransaction'
// import AddTransaction from './components/AddTransaction'

function App() {
  const [theme,setTheme]=useState(false)
  const changeThemefunction=(e)=>{
  //  console.log(e.);
  }
 
  return (
    <GlobalProvider>
         <div className={theme?"App dark":"App"}>
                <Header></Header>
                <label className="switch">
                  <input type="checkbox"
                  onChange={()=>setTheme(!theme)}
                  />
                  <span className="slider round"></span>
                </label>
                
                <div className="container">
                    <Balance></Balance>
                    <IncomeExpenses></IncomeExpenses>
                    <TransactionList></TransactionList>
                    <AddTransaction></AddTransaction>
                </div>
            
     
          </div>
    </GlobalProvider>
  );
}

export default App;
