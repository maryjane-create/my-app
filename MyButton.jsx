import  React from  'react'

const MyButton=(props) =>{
    return(
        <button style={{backgroundColor: "black", color:"white"}}>
            {props.buttonName}
        </button>
    )
}