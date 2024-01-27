import React, { useState } from 'react';
import "./ClassSelect.css";

function ClassSelect(props) {
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
                                <img src={require(`../images/class_${class_name}.jpg`)} alt={class_name}></img>
                                <div class="shadow"></div>
                            </div>
                        </abbr>
                        {Object.keys(props.classBis["25"][class_name]).map((spec)=>{
                            return(
                            <abbr title={spec.charAt(0).toUpperCase() + spec.slice(1)}>
                                <div class={`spec_button ${class_name} ${spec} hidden`} onClick={()=>{handleSpecNameClick(class_name,spec)}}>
                                    <img src={require(`../images/spec_${class_name}_${spec}.jpg`)}alt={spec}></img>
                                    <div class="shadow"></div>
                                </div>
                            </abbr>
                            )
                        })}
                        <abbr title="Back">
                            <div class={`spec_button return hidden ${class_name}`} onClick={()=>{handleSpecNameClick(class_name, undefined, true)}}>
                                <img src={require(`../images/spec_return.jpg`)}alt="return"></img>
                                <div class="shadow"></div>
                            </div>
                        </abbr>
                        </>
                    )
                })
            }
            {/*
            <button class="class_button" onClick={()=>{handleClassNameClick("paladin")}}>
                <img src={require("../images/class_paladin.jpg")} alt="paladin"></img>
            </button>
            <button class="class_button" onClick={()=>{handleClassNameClick("hunter")}}>
                <img src={require("../images/class_hunter.jpg")} alt="hunter"></img>
            </button>
            <button class="class_button" onClick={()=>{handleClassNameClick("rogue")}}>
                <img src={require("../images/class_rogue.jpg")} alt="rogue"></img>
            </button>
            <button class="class_button" onClick={()=>{handleClassNameClick("priest")}}>
                <img src={require("../images/class_priest.jpg")} alt="priest"></img>
            </button>
            <button class="class_button" onClick={()=>{handleClassNameClick("druid")}}>
                <img src={require("../images/class_druid.jpg")} alt="druid"></img>
            </button>
            <button class="class_button" onClick={()=>{handleClassNameClick("shaman")}}>
                <img src={require("../images/class_shaman.jpg")} alt="shaman"></img>
            </button>
            <button class="class_button" onClick={()=>{handleClassNameClick("mage")}}>
                <img src={require("../images/class_mage.jpg")} alt="mage"></img>
            </button>
            <button class="class_button" onClick={()=>{handleClassNameClick("warlock")}}>
                <img src={require("../images/class_warlock.jpg")} alt="warlock"></img>
            </button>
        </div>
        <div class="class_spec options">
            
            <button class="spec_button rogue assassination hidden">
                <img src={require("../images/spec_assassination.jpg")}alt="assassination"></img>
            </button>
            <button class="spec_button rogue assassination hidden">
                <img src={require("../images/spec_assassination.jpg")}alt="assassination"></img>
            </button>
            <button class="spec_button rogue assassination hidden">
                <img src={require("../images/spec_assassination.jpg")}alt="assassination"></img>
            </button>
            <button class="spec_button assassination hidden">
                <img src={require("../images/spec_assassination.jpg")}alt="assassination"></img>
            </button>
            <button class="spec_button assassination hidden">
                <img src={require("../images/spec_assassination.jpg")}alt="assassination"></img>
            </button>
            <button class="spec_button assassination hidden">
                <img src={require("../images/spec_assassination.jpg")}alt="assassination"></img>
            </button>
            <button class="spec_button assassination hidden">
                <img src={require("../images/spec_assassination.jpg")}alt="assassination"></img>
            </button>
            <button class="spec_button assassination hidden">
                <img src={require("../images/spec_assassination.jpg")}alt="assassination"></img>
            </button>
            */}
        </div>
    </div>
  )
}

export default ClassSelect
