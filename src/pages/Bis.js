import React, {useState} from 'react'
import Inventory from '../components/Inventory';
import Specs from '../components/Specs';
import icons_default from "../data/Icons_default";
import "./Bis.css"
import classBis from "../data/Class_bis.json";
function Bis() {
  const [backendData, setBackendData] = useState(icons_default);
  const [classSelected, setClassSelected] = useState("");
  const [loading, setLoading] = useState(true);

  async function handleSubmit(e){
    setLoading(true);
    e.preventDefault(e);
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    let items_bis = classBis[formJson["level"]][formJson["class_name"]][formJson["spec"]];
    loadItems(items_bis);
  }

  function loadItems(items){
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
        <Inventory inventory={backendData} loading={loading}></Inventory>
    </>
  )
}

export default Bis;
