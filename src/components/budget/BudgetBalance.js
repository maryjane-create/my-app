import React  from "react";
import  "./BudgetBalance.css"
import   {useState} from 'react'

const BudgetBalance=(props)=>{

    const [input, setInput]=useState(false)
    const handleInput=(e)=>{
        console.log(e)
        setInput(e.target.value)
    }
    return (
        <div className="budgetBalance">
            <div className="balance">
                {props.balance}
            </div>
            <div className="balance-button">
                <input onChange={handleInput}/>
                <button onClick={()=>props.setBalance(input)}>
              </button>
            </div>

        </div>
    )
}

export  default  BudgetBalance