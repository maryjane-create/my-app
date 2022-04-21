import React, {useState} from "react";
import Login from "../BlogPages/Login";


const Authentication=()=>{
    const [auth, setAuth]=useState("login")
    return(
        <div>
            <button>{auth}</button>
            {auth==="login"? <Login setAuth={setAuth()}/>: <Register setAuth={setAuth}/>}
        </div>
    )
}
export default Authentication