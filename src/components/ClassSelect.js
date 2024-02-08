import React, { useState } from 'react';
import "./ClassSelect.css";

function ClassSelect(props) {
    const prefixUrl = "https://wow-item-backend-752ca682c8fc.herokuapp.com/img?src=";
    let specs = [];
    const classInfo = Object.keys(props.classBis["25"]);
    classInfo.forEach((class_name)=>{
        specs.push(...Object.keys(props.classBis["25"][class_name]));
    });

    function handleClassNameClick(class_name){
        props.handleSelectedChange({class_name:class_name, spec:""});
        let class_buttons = document.querySelectorAll(".class_button");
        class_buttons.forEach((el)=>el.classList.toggle("hidden"));
        let specs = document.querySelectorAll(`.spec_button.${class_name}`);
        for(let spec of specs){
            spec.classList.toggle("hidden");
        }
    }

    function handleSpecNameClick(class_name,spec,back=false){
        let spec_buttons = document.querySelectorAll(`.spec_button.${class_name}`);
        spec_buttons.forEach((el)=>el.classList.toggle("hidden"));
        let class_buttons = document.querySelectorAll(".class_button");
        class_buttons.forEach((el)=>el.classList.toggle("hidden"));
        if(!back){
            props.handleSelectedChange({spec:spec});
            let items_bis = props.classBis[25][class_name][spec];
            props.loadItems(items_bis);
        }else{
            props.handleSelectedChange({class_name:"", spec:""});
        }
    }

    return (
    <div className="select">
        <div className="class_name options">
            {
                classInfo.map((class_name,index)=>{
                    return(
                        <div className="class_spec_container" key={index}>
                            <abbr className = {class_name} title={class_name.charAt(0).toUpperCase() + class_name.slice(1)}>
                                <div className="class_button" onClick={()=>{handleClassNameClick(class_name)}}>
                                    <div className="select_class img_container">
                                        <img className = "img_orig" src={`${prefixUrl}class_${class_name}.jpg`} alt={class_name}></img>
                                        <div className="shadoweff"></div>
                                    </div>
                                    <img className = "border" src={`${prefixUrl}border.png`} alt="border"></img>
                                    <div className="name_container">
                                        <span>{class_name.charAt(0).toUpperCase() + class_name.slice(1)}</span>
                                    </div>     
                                </div>
                            </abbr>
                            {Object.keys(props.classBis["25"][class_name]).map((spec, index)=>{
                                return(
                                <abbr key={index} title={spec.charAt(0).toUpperCase() + spec.slice(1)}>
                                    <div className={`spec_button ${class_name} ${spec} hidden`} onClick={()=>{handleSpecNameClick(class_name,spec)}}>
                                        <div className="select_spec img_container">
                                            <img className = "img_orig" src={`${prefixUrl}spec_${class_name}_${spec}.jpg`}alt={spec}></img>
                                            <div className="shadoweff"></div>
                                        </div>
                                        <img className="border" src={`${prefixUrl}border.png`} alt="border"></img>
                                        <div className="name_container">
                                            <span>{spec.charAt(0).toUpperCase() + spec.slice(1)}</span>
                                        </div> 
                                    </div>
                                </abbr>
                                )
                            })}
                            <abbr title="Back to className selection">
                                <div className={`spec_button return hidden ${class_name}`} onClick={()=>{handleSpecNameClick(class_name, undefined, true)}}>
                                    <div className="select_back img_container">
                                        <img className="img_orig" src={`${prefixUrl}spec_return.jpg`}alt="return"></img>
                                        <div className="shadoweff"></div>
                                    </div>
                                    <img className="border" src={`${prefixUrl}border.png`} alt="border"></img>
                                </div>
                            </abbr>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ClassSelect
