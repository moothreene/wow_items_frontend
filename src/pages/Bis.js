import React, {useEffect, useState} from 'react'
import Inventory from '../components/Inventory';
import Specs from '../components/Specs';
import "./Bis.css"
import classBis from "../data/Class_bis.json";
function Bis() {
  const [backendData, setBackendData] = useState({});
  const [classSelected, setClassSelected] = useState("");

  async function handleSubmit(e){
    e.preventDefault(e);
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    let items_bis = classBis[formJson["level"]][formJson["class_name"]][formJson["spec"]];
    loadItems(items_bis);
  }

  function loadItems(items){
    for(let [key, value] of Object.entries(items)){
      fetch(`/api?id=${+value}`).then(
        response => response.json()
      ).then(
        data=>{
          setBackendData(backendData =>({...backendData,[key]:data}))
        }
      )
    }
    return
  }

  let tooltip = document.getElementsByClassName("item_tooltip");
  document.addEventListener("mousemove",moveTooltip,false);

  function moveTooltip(e){
    for(let i=tooltip.length; i--;){
      tooltip[i].style.left = e.pageX + "px";
      tooltip[i].style.right = e.pageX + "px";
    }
  }

  function handleClassSelect(e){
    let value = e.target.value;
    setClassSelected(value);
  }

  return (
    <>
      <div class = "form">
          <form method="post" onSubmit={handleSubmit}>
            <label>
              Class:
            </label>
            <br />
            <select name="class_name" onChange={handleClassSelect} required >
              <option value="" selected>-select class-</option>
              <option value="rogue">Rogue</option>
              <option value="paladin">Paladin</option>
            </select>
            <br />
            <label>
              Level:
            </label>
            <br />
            <select name="level" required>
              <option value="25" selected>25</option>
              <option value="40">40</option>
            </select>
            <br />
            <label>
              Spec:
            </label>
            <br />
              <Specs class_name={classSelected}></Specs>
            <br />
            <button type="submit">Submit</button>
          </form>
      </div>
      {
        Object.keys(backendData).length === 17 &&
        <Inventory inventory={backendData}></Inventory>
      }
    </>
  )
}

export default Bis;
