import  "./BlogApp.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react"
import Home from "./BlogPages/Home";
import CreatePost from "./BlogPages/CreatePost";
import Login from "./BlogPages/Login";

function BlogApp(){
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/createPost">Create Post</Link>
                <Link to="/Login">Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/createPost" element={<CreatePost/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default BlogApp