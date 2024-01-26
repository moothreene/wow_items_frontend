import React, {useState} from 'react'
import Inventory from '../components/Inventory';
import ClassSelect from '../components/ClassSelect';
import icons_default from "../data/Icons_default";
import "./Bis.css"
import classBis from "../data/Class_bis.json";

function Bis() {
  const [backendData, setBackendData] = useState(icons_default);
  const [loading, setLoading] = useState(true);

  function loadItems(items){
    setLoading(true);
    for(let [key, value] of Object.entries(items)){
      fetch(`/api?id=${+value[0]}`).then(
        response => response.json()
      ).then(
        data=>{
          if(value.length > 1) data["desc"] = value[1];
          setBackendData(backendData =>({...backendData,[key]:data}))
        }
      ).then(setLoading(false));
    }
  }

  let tooltips = document.getElementsByClassName("item_tooltip");
  document.addEventListener("mousemove",moveTooltip,false);

  function moveTooltip(e){
    for(let i=tooltips.length; i--;){
      let rect = tooltips[i].getBoundingClientRect();
      tooltips[i].style["left"] = e.pageX + "px";
      tooltips[i].style["right"] = (window.innerWidth -(e.pageX + rect["width"])) + "px";
    }
  }


  return (
    <div class="bis">
        <ClassSelect classBis={classBis} loadItems={loadItems}></ClassSelect>
        <Inventory inventory={backendData} loading={loading}></Inventory>

    </div>
  )
}

export default Bis;
