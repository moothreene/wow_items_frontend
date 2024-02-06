import React, {useState} from 'react'
import Inventory from '../components/Inventory';
import Navbar from '../components/Navbar';
import ClassSelect from '../components/ClassSelect';
import icons_default from "../data/Icons_default";
import "./Bis.css"
import classBis from "../data/Class_bis.json";

function Bis() {
  const [backendData, setBackendData] = useState(icons_default);
  const [selectedCurrently, setSelectedCurrently] = useState({class_name:"",spec:""});

  function loadItems(items){
    for(let [key, value] of Object.entries(items)){
      fetch(`https://wow-item-backend-752ca682c8fc.herokuapp.com/api?id=${+value[0]}`,{
        mode:"cors",
        method:'GET',
        headers:{
            'Content-type':'application/json'
                }
        }).then(
        response => response.json()
      ).then(
        data=>{
          if(value.length > 1) data["desc"] = value[1];
          setBackendData(backendData =>({...backendData,[key]:data}))
        }
      )
    }
  }

  function handleSelectedChange(updatedValue){
    setSelectedCurrently(selectedCurrently =>({...selectedCurrently,...updatedValue}));
  }


  return (
    <>
      <Navbar></Navbar>
      <div class="bis">
        <ClassSelect classBis={classBis} loadItems={loadItems} handleSelectedChange={handleSelectedChange}></ClassSelect>
        <Inventory inventory={backendData} selectedCurrently={selectedCurrently}></Inventory>
    </div>
    </>
  )
}

export default Bis;
