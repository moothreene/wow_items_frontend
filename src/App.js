import React, {useEffect, useState} from 'react'
import Item from './Item';
import "./App.css"
import itemLocalization from "./ItemLocalisation.json";
import classId from "./Class_id.json";
function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(()=>{
    fetch("/api?").then(
      response => response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  }, []);


  function handleSubmit(e){
    e.preventDefault(e);
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    let props = "";
    for(let [key,value] of Object.entries(formJson)){
      if(value !== "" && value !== null && value !== 0){
        if(props.length === 0){
          props += "?";
        }else props += "&"
        props +=`${key}=${value}`;
      }
    }
    fetch(`/api${props}`).then(
      response => response.json()
    ).then(
      data=>{
        console.log(data);
        setBackendData(data);
      }
    )
  }


  function getItemsByClass(class_name){
    fetch(`/api?class=${class_name}`).then(
      response => response.json()
    ).then(
      data=>{
        console.log(data);
        setBackendData(data);
      }
    )
  }

  function getItemByLevel(level){
    fetch(`/api?level=${level}`).then(
      response => response.json()
    ).then(
      data=>{
        setBackendData(data);
      }
    )
  }
  let tooltip = document.getElementsByClassName("item_tooltip");
  document.addEventListener("mousemove",moveTooltip,false);

  function moveTooltip(e){
    for(let i=tooltip.length; i--;){
      tooltip[i].style.left = e.pageX + "px";
      tooltip[i].style.right = e.pageX + "px";
    }
  }

  return (
    <div class = "form">
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Class:
            <input name="class_name" defaultValue=""></input>
          </label>
          <label>
            Level:
            <input name="level" defaultValue="60"></input>
          </label>
          <button type="submit">Submit</button>
        </form>
        {backendData.map((itemData)=>{
          return(
            <Item item = {itemData} localization = {itemLocalization} classid = {classId}/>
          )
        })}
    </div>
  )
}

export default App
