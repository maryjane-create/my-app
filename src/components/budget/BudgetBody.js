import React, {useState} from 'react'
import  './budgetBody.css'
import BudgetEntry from "./BudgetEntry";
import BudgetDetails from "./BudgetDetails";


const BudgetBody=()=>{
    const [budget, setBudget]=useState([])
    return (
        <div>
            <div>
                <h1>Welcome To Your Personal Budget</h1>
                <p>Enter the price, description and give a special name to your expenditure</p>
            </div>
            <div className="budget-body-sectioned">
                <BudgetEntry budget={budget} setBudget={setBudget}/>
                {/*<BudgetDetails budget={}/>*/}
            </div>
        </div>
    )
}

export default BudgetBody