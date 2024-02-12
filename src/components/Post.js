import React from 'react'
import {format} from "date-fns";
import serverLink from '../data/defaults';
const {serverLink:prefix} = serverLink;

function Post({title,summary,cover,content,createdAt,author}) {
  return (
    <div className='post'>
      <div className='image'>
        <img src={`${prefix}/${cover}`} alt={cover}></img>
      </div>
      <div className='texts'>
        <h2>{title}</h2>
        <p className='info'>
            smth
            <a className='author'>{author.username}</a>
            <time>{format(new Date(createdAt),"MMM d, yyyy HH:mm")}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  )
}

export default Post
