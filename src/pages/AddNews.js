import React, { useState } from 'react'
import "./AddNews.css";
import { Navigate } from 'react-router-dom';
import Editor from '../components/Editor';
import serverLink from '../data/defaults';
const {serverLink:prefix} = serverLink;

function AddNews() {
    const[title,setTitle] = useState("");
    const[summary,setSummary] = useState("");
    const[content,setContent] = useState("");
    const[files,setFiles] = useState("");
    const [redirect,setRedirect] = useState(false);

    async function addNewsPost(event){
        event.preventDefault();
        const data = new FormData();
        data.set("title",title);
        data.set("summary",summary);
        data.set("content",content);
        data.set("file",files[0])

        const response = await fetch(`${prefix}/post`,{
            method:"POST",
            body:data,
            credentials:"include",
        });
        if(response.ok){
          setRedirect(true);
        }
    }

    if(redirect){
      return(
        <Navigate to={"/"}/>
      )
    }

    return (
        <div className='addnews_container'>
            <form onSubmit={addNewsPost}>
                <input type="title" placeholder={"Title"} value={title} onChange={e=>{setTitle(e.target.value)}} />
                <input type="summary" placeholder={"Summary"} value={summary} onChange={e=>{setSummary(e.target.value)}}/>
                <input type="file" onChange={e=>{setFiles(e.target.files)}}/>
                <Editor value={content} onChange={setContent}/>
                <button className="addnews">Add</button>
            </form>
        </div>
  )
}

export default AddNews
