import React, {useState} from "react";

const Register=()=>{

    const [userDetails, setUserDetails]=useState({username:"", email:"", password:""})
    const handleUserInput=(e)=> {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }
    const handleRegistration=(isEmailCorrect)=>{
            let {username, email, password}=userDetails
        let isFieldIncomplete=Object.keys(userDetails).some((detail)=>" ")
        if (isFieldIncomplete){
            console.log("field incomplete")
             return
        }

        let validRegex=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
          isEmailCorrect =email.match(validRegex)
        if (isEmailCorrect){
            console.log("email is correct")
            return;
        }


        let  userRepository=JSON.parse(LocalStorage.getItem("user"))
        let isUserExist=userRepository.some((user)=>user.username===username)

        console.log(userDetails)

        }


    return(
        <div>
            <label>username</label>
            <input name="username"/>
            <label>email</label>
            <input name="email"/>
            <label>password</label>
            <input name="password"/>
        </div>
    )
}