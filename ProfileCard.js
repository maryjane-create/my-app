import React from 'react'
import image from "../assets/logo.svg"
import "./ProfileCard.css"
import React, {useState} from 'react'

const ProfileCard =(props) => {

    let{username, hobby}=props
    const handleclick=()=>{
        let  newObject={username: 'Mr' +username +hobby +'My' +hobby}
        setState({...state,...newObject})
    }

    const [state, setState]=useState({'username':username, 'hobby':hobby})


    return(
        <div className='profile-card'>
            <img src={image} alt="profile card" className="profile-card-avatar"/>
            <div className='details-container'>
                <div className='firstname-details'></div>
                <p>name</p>
                <h1>{props.username}</h1>
            </div>
            <div className='hobby-details'>
                <p> Hobby</p>
                <h1>{props.hobby}</h1>
            </div>

        </div>
    )
}