import { useEffect, useState } from "react";
import "./Home.css";
import Post from "../components/Post";

export default function Home(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/post").then(
            response=>{
                response.json().then(postsarr=>{
                    setPosts(postsarr);
                });
            }
        )
    },[]);
    return (
        <>
            <div className="home_container">
               <h1 className="home_title">Welcome to my wow "Best in Slot" website!</h1>
               {posts.map(post=>{
                    return(<Post {...post}/>)
                    })
                }
            </div>
        </>
        
    )
}