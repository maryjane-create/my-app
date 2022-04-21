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


const handleLogin=()=> {
    let userRepository = JSON.parse(LocalStorage.getItem("users"))
    let isValid = userRepository.some(userObject => {
            let idCheck = (userObject?.email === userDetails.identity ||
                userObject?.username === userDetails?.identity)
            let passwordCheck = (userObject.password === userDetails.password)
            return idCheck && passwordCheck
        }
    )
}

export  default Login