import  React, {useState} from 'react'
import './Budget.css'
import BudgetBalance from "./components/budget/BudgetBalance";
import BudgetBody from "./components/budget/BudgetBody";



const  Budget=()=>{
    const [balance, setBalance]=useState(5000000)
    return (
        <div className="budget-container">
            <BudgetBalance balance={balance} setBalance={setBalance}/>
            <BudgetBody/>
        </div>
    )
}

export  default  Budget