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
            let items_bis = props.classBis[25][class_name][spec];
            props.loadItems(items_bis);
        }
    }

    return (
    <div class="select">
        <div class="class_name options">
            {
                classInfo.map((class_name)=>{
                    return(
                        <>
                        <abbr title={class_name.charAt(0).toUpperCase() + class_name.slice(1)}>
                            <div class="class_button" onClick={()=>{handleClassNameClick(class_name)}}>
                                <div class="select_class img_container">
                                    <img class = "img_orig" src={`${prefixUrl}class_${class_name}.jpg`} alt={class_name}></img>
                                    <div class="shadow"></div>
                                </div>
                                <img class = "border" src={`${prefixUrl}border.png`} alt="border"></img>        
                            </div>
                        </abbr>
                        {Object.keys(props.classBis["25"][class_name]).map((spec)=>{
                            return(
                            <abbr title={spec.charAt(0).toUpperCase() + spec.slice(1)}>
                                <div class={`spec_button ${class_name} ${spec} hidden`} onClick={()=>{handleSpecNameClick(class_name,spec)}}>
                                    <div class="select_spec img_container">
                                        <img class = "img_orig" src={`${prefixUrl}spec_${class_name}_${spec}.jpg`}alt={spec}></img>
                                        <div class="shadow"></div>
                                    </div>
                                    <img class="border" src={`${prefixUrl}border.png`} alt="border"></img>
                                </div>
                            </abbr>
                            )
                        })}
                        <abbr title="Back to class selection">
                            <div class={`spec_button return hidden ${class_name}`} onClick={()=>{handleSpecNameClick(class_name, undefined, true)}}>
                                <div class="select_back img_container">
                                    <img class="img_orig" src={`${prefixUrl}spec_return.jpg`}alt="return"></img>
                                    <div class="shadow"></div>
                                </div>
                                <img class="border" src={`${prefixUrl}border.png`} alt="border"></img>
                            </div>
                        </abbr>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ClassSelect
