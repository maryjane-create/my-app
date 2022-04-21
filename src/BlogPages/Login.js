import React, {useState} from "react";
import {auth, provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom"






const BudgetBody=(props)=>{
    const {balance, setBalance}=props
    const [budget, setBudget]=useState([])
    let {identity}=useParams()

    return (
        <div className="budget-body">
            <div className="text-intro">
                <h1> Welcome to your Pesonal Budget{identity}</h1>
                <p>Enter the price, description and give a special name</p>
            </div>

        </div>
    )
}

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
    let  user;
    let isValid = userRepository.some(userObject => {
            let idCheck = (userObject?.email === userDetails.identity ||
                userObject?.username === userDetails?.identity)
            let passwordCheck = userObject.password === userDetails.password
            if (
                idCheck && passwordCheck
            ){user=userObject}
            return idCheck && passwordCheck
        }
    )

    let {identity}=userDetails
    isValid ?
        history.push('/dashboard/${identity}/?id=${user.username})/?id=${identity}'):
        setAlert({ishow:true, status:"error", message:"user details incorrect"})
    setTimeout(
        ()=>setAlert({ishow:false, status:"", message:""})
    )

}

export  default Login