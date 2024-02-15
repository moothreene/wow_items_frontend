import React, { useContext, useEffect, useState } from 'react'
import serverLink from '../data/defaults';
import { useParams, Link, Navigate} from 'react-router-dom';
import "./PostPage.css";
import { format } from 'date-fns';
import { UserContext } from '../components/UserContext';

const {serverLink:prefix} = serverLink;

function PostPage() {
    const {userInfo} = useContext(UserContext);
    const [postInfo, setPostInfo] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`${prefix}/post/${id}`).then(response=>{
            response.json().then(postData=>{
                setPostInfo(postData)
            })
        })
    },[]);

    function handleDelete(){
        fetch(`${prefix}/delete/${id}`,{
            method:"PUT",
            credentials:"include",
        }).then(response=>{
            setRedirect(true);
        })
    }

    if(!postInfo) return "";

    if(redirect) return <Navigate to={"/"} />

    return (
        <div className='post_page'>
            <h1>{postInfo.title}</h1>
            <time>{format(new Date(postInfo.createdAt),"MMM d, yyyy HH:mm")}</time>
            <div className='author'>by @{postInfo.author.username}</div>
            {userInfo !== null &&(
                <>
                {userInfo.id === postInfo.author._id &&(
                    <>
                    <div className='edit'>
                        <Link className='edit' to={`/edit/${postInfo._id}`}>Edit post</Link>
                    </div>
                    <div className="delete" onClick={handleDelete}>
                        Delete
                    </div>
                    </>
                )}
                </>
            )}
            <div className='image'>
                <img src={`${prefix}/${postInfo.cover}`}/>
            </div>
            <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
        </div>
  )
}

export default PostPage
