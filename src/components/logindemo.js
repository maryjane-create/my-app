import React, {useState} from "react";


const  login=(props)=>{
    const [username, setUsername]=useState("")

    const  handleUsername=(e)=>{
        setUsername(e.target.value)
    }

    const handleLogin=()=>{
        let userRepository=JSON.parse(LocalStorage.getItem("user"))
        let  isValid=userRepository.some((userObject)=>{
            let  idCheck=(userObject?.email===userDetails.identity||
            userObject?.username===userDetails?.identity)
            let  passwordCheck=(userObject.password===userDetails.password)
            return idCheck && passwordCheck

        })

        isValid ?
            setAlert({ishow:true, status:"success", message:"login successful"}):
            setAlert({ishow:true, status:"error", message:"user details incorrect"})
        setTimeout(
            ()=>setAlert({ishow:false, status:"", message:""}), 5000)
    }


}
