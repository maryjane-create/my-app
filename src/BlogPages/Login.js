import React  from "react";
import {auth, provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom"

function Login({setIsAuth}){
    let  navigate=useNavigate()
    const signInWithGoogle=()=>{
        signInWithPopup(auth, provider).then((result) =>{
            localStorage.setItem("isAuth",true);
            setIsAuth(true)
            navigate("/")
        })
    }

    return(
        <div className="loginPage">
            <p>Sign in with Google</p>
            <button className="google-login-button" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
    )
}

export  default Login