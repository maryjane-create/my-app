import React from "react";
import  './budgetBody.css'
import {toDatetimeLocal} from '../../util'

const BudgetDetails=(props)=>{
    let {budget, setBudget, balance, setBalance}= props

    const Delete=(objectID, budgetAmount)=>{
        let  newObject=[...budget]
        setBudget(newObject.filter((data, index)=>index !==objectId))
        let reversedBalance=balance+budgetAmount;
        setBalance(reversedBalance)
    }

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
                      <th></th>
                    </tr>
                    {budget.map((data, index)=>
                    <tr key={index} className="data-row">
                        <td>{data.date}</td>
                        <td>{data.budgetName}</td>
                        <td>{data.budgetAmount}</td>
                        <td>{data.budgetDescription}</td>
                        <td> <button onClick={()=>deleteEntry(index)}style={{backgroundColor:"red", color:"white", padding:"2px 10px", border:"unset"}}>
                            Delete
                            </button>
                        </td>
                    </tr> )}
                </table>:
                "it is empty"}
            <Link to="./delete">Delete</Link>
        </div>
    )
}

export  default BudgetDetails