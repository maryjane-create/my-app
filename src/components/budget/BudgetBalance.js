import React, {useEffect} from "react";
import  "./BudgetBalance.css"
import   {useState} from 'react'

const BudgetBalance=(props)=>{

    const [input, setInput]=useState("")
    const [exchange, setExchangeRate]=useState("")
    const [selectOption, setSelectOption]=useState("")


    const handleInput=(e)=>{
        setInput(e.target.value)
    }

    useEffect(()=>(axios.get("https://api.exchangerate-api.com/v6/4e3eb83a53fd839db5841fd2/latest/NGN  ").then((response)=>{
        setExchangeRate(response.date.conversion_rates)
        setSelectOption(Object.keys(response.data.conversion_rates[0])), []


        useEffect(()=>(
            console.log("just mounted budget balance")
        ))
    })))

    return (
        <div className="budgetBalance">
            <div className="balance">
                {props.balance}
            </div>
            <select className="balance-dropdown" onChange={handleSelect}>
                {Object.keys(exchangeRate).length>0 && Object.keys(exchangeRate).map((data, index)=><option key={index}>{data}</option> )}
            </select>
            <div className="balance-button">
                <input onChange={handleInput}/>
                <button onClick={()=>props.setBalance(input)}>
                    Update balance
              </button>
            </div>


        </div>
    )
}

const handleInput=(e)=>{
    setInput(e.target.value)
}
//
// const handleSelect=(e)=>{
//     e.target.value()==Object.keys(exchangeRate)[0]?
//         props.setBalance(1000*exchangeRate[e.target.value()])
// }
useEffect(()=>{
    fetch('').then(
        (data)=>data.json()
    ).then(data=>console.log(data))

}, [])
useEffect(()=>{
    console.log("Mounted budget balance")
    return()=>{
        console.log("budget balance just mounted")
    }
}, [this.props.balance])



export  default  BudgetBalance