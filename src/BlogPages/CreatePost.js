import React, {useState} from "react";
import {addDoc} from "firebase/firestore"
import  {db} from "../firebase-config"

function CreatePost(){
    const [title, setTitle]=useState("")
    const [posttext, setPostText]=useState("")

    const postCollection=collection(db, "posts")

    const createPost=async ()=>{
        await addDoc(postCollection,)
    }



    return <div className="createPostPage">
        <div className="cpContainer">
            <h1>Create A Post</h1>
            <div className="inputGp">
                <label>Title</label>
                <input placeholder="Title" onChange={(event) => {setTitle(event.target.value)}}/>
            </div>
            <div className="inputGp">
                <label>Post:</label>
                <textarea placeholder="Post"/>
            </div>
            <button>Submit Post</button>
        </div>
    </div>
}

export  default CreatePost