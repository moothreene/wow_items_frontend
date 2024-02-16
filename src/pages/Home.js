import { useEffect, useState } from "react";
import "./Home.css";
import Post from "../components/Post";
import serverLink from '../data/defaults';
const {serverLink:prefix} = serverLink;

export default function Home(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch(`${prefix}/post`).then(
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
               <h2 className="home_news">Latest news:</h2>
               {posts.map(post=>{
                    return(<Post {...post}/>)
                    })
                }
            </div>
        </>
        
    )
}