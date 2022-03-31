import React from "react";
import  './budgetBody.css'

const BudgetDetails=()=>{
    let {budget}= props

    return(
        <div className="budget-details-container">
            <h1>Details</h1>
            {budget.length>0
                ?
                <table>
                    <tr>
                      <th>Date</th>
                      <th>Budget Name</th>
                      <th>Amount</th>
                      <th>Description</th>
                    </tr>
                    {budget.map((data, index)=>
                    <tr key={index}>
                        <td>{data.date}</td>
                        <td>{data.budgetName}</td>
                        <td>{data.budgetAmount}</td>
                        <td>{data.budgetDescription}</td>
                    </tr> )}
                </table>:
                "it is empty"}
        </div>
    )
}

export  default BudgetDetails