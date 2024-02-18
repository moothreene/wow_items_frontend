import React, {useState} from 'react'
import Inventory from '../components/Inventory';
import ClassSelect from '../components/ClassSelect';
import icons_default from "../data/Icons_default";
import "./Bis.css"
import classBis from "../data/Class_bis.json";
import serverLink from '../data/defaults';
const {serverLink:prefix} = serverLink;

function Bis() {
  const [inventoryData, setInventoryData] = useState(icons_default);
  const [selectedCurrently, setSelectedCurrently] = useState({class_name:"",spec:"",class_prev:"",spec_prev:""});

  function loadItems(items){
    for(let [key, value] of Object.entries(items)){
      fetch(`${prefix}/api?id=${+value[0]}`,{
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
          setInventoryData(inventoryData =>({...inventoryData,[key]:data}))
        }
      )
    }
  }

  function handleSelectedChange(updatedValue){
    if(updatedValue["spec"]!=""){
      setSelectedCurrently(selectedCurrently =>({...selectedCurrently,
                                                  spec_prev:updatedValue["spec"],
                                                  class_prev:selectedCurrently["class_name"],
                                                  spec:updatedValue["spec"]
                                                }));
    }else if(updatedValue["class_name"]!=""){
      setSelectedCurrently(selectedCurrently =>({...selectedCurrently,...updatedValue}));
    }else{
      setSelectedCurrently(selectedCurrently =>({...selectedCurrently,
                                                  class_name:selectedCurrently["class_prev"],
                                                  spec:selectedCurrently["spec_prev"]
                                                }))
    }
  }



  return (
      <div className="bis">
        <ClassSelect classBis={classBis} loadItems={loadItems} handleSelectedChange={handleSelectedChange}></ClassSelect>
        <Inventory inventory={inventoryData} selectedCurrently={selectedCurrently}></Inventory>
      </div>
  )
}

export default Bis;