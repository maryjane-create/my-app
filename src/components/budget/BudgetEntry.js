import React, {useState} from "react";


const BudgetEntry=(props) =>{
    let {budget, setBudget}=props

    const [input, setInput]=useState({budgetName:'', budgetAmount:'', budgetDescription:''})

    const handleInput=(e)=>{
        setInput({...input, [e.target.name]:e.target.value})
    }

    const  createBudget = () => {
      let budgetData=[{...input, date:Date.now()}, ...budget]
        setBudget(budgetData)
    }
    return(
        <div className="budget-entry-container">
            <div className="budgetEntry">
                <p>Budget Name</p>
                <label>Name</label>
                <input name="budgetName"/>
            </div>
            <div className="budgetEntry">
                <label>Budget Amount</label>
                <input name="budgetAmount"/>
            </div>
            <div className="budgetEntry">
                <label>Budget Description</label>
                <input name="budgetDescription" onChange={handleInput}/>
            </div>
            <button onClick={createBudget}>Enter</button>
        </div>

    )
}

export default  BudgetEntry