import React, { useEffect, useState } from 'react'
import "./EditNews.css";
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';
import serverLink from '../data/defaults';
const {serverLink:prefix} = serverLink;

function EditNews() {
    const {id} = useParams();
    const[title,setTitle] = useState("");
    const[summary,setSummary] = useState("");
    const[content,setContent] = useState("");
    const[files,setFiles] = useState("");
    const[cover,setCover] = useState("");

    const [redirect,setRedirect] = useState(false);

    useEffect(()=>{
        fetch(`${prefix}/post/${id}`).then(response=>{
            response.json().then(postInfo=>{
                setTitle(postInfo.title)
                setContent(postInfo.content)
                setSummary(postInfo.summary)
            })
        })
    },[]);
    async function editNewsPost(event){
        event.preventDefault();
        const data = new FormData();
        data.set("title",title);
        data.set("summary",summary);
        data.set("content",content);
        data.set("id",id);
        if(files?.[0]){
            data.set("file",files?.[0])
        }
        console.log(data)       

        const response = await fetch(`${prefix}/post`,{
            method:"PUT",
            body:data,
            credentials:"include",
        });
        console.log(response.ok);

        if(response.ok){
          setRedirect(true);
        }
    }

    if(redirect){
        return(<Navigate to={`/post/${id}`}/>)
        
    }

    return (
        <div className='editnews_container'>
            <form onSubmit={editNewsPost}>
                <input type="title" placeholder={"Title"} value={title} onChange={e=>{setTitle(e.target.value)}} />
                <input type="summary" placeholder={"Summary"} value={summary} onChange={e=>{setSummary(e.target.value)}}/>
                <input type="file" onChange={e=>{setFiles(e.target.files)}}/>
                <Editor value={content} onChange={setContent}/>
                <button className="addnews">Edit</button>
            </form>
        </div>
  )
}

export default EditNews
