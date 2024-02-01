import React, { useEffect } from 'react';
import Item from "./Item";
import "./Inventory.css";

export default function Inventory(props){

    useEffect(() => {
        let items = document.querySelectorAll('.item_image');
        items.forEach((item)=> {
            if(!item.classList.contains("undefined")){
                item.addEventListener("mouseenter",()=>{
                    item.parentElement.querySelector(".item_tooltip").classList.add("visible");
                    let rect = item.parentElement.querySelector(".item_tooltip").getBoundingClientRect();
                    console.log(rect);
                    if(rect["bottom"] > window.innerHeight){
                        item.parentElement.querySelector(".item_tooltip").classList.add("is_leaving_bot");
                    }

                    if((rect["x"]+rect["width"]) > window.innerWidth){
                        item.parentElement.querySelector(".item_tooltip").classList.add("is_leaving_right");
                    }
                
                })
            }
        });

        items.forEach(item=> item.addEventListener("mouseleave",()=>{
            if(!item.classList.contains("undefined")){
                item.parentElement.querySelector(".item_tooltip").classList.remove("visible");
                if(item.parentElement.querySelector(".item_tooltip").classList.contains("is_leaving_bot")){
                    item.parentElement.querySelector(".item_tooltip").classList.remove("is_leaving_bot");
                }
                if(item.parentElement.querySelector(".item_tooltip").classList.contains("is_leaving_bot")){
                    item.parentElement.querySelector(".item_tooltip").classList.remove("is_leaving_bot");
                }
            }
        }));
            
      },[props.inventory]);

    

    try{
        return(
            <div class="inventory">
                <div class="columns">
                    <div class="column left">
                    <span class={`item head ${props.inventory["head"]["quality"]}`}>
                            <Item item={props.inventory["head"]} ></Item>
                            {props.inventory["head"]["name"]!="default"&& props.inventory["head"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["head"] && ` (${props.inventory["head"]["desc"]})`}
                        </span>
                        
                        <span class={`item neck ${props.inventory["neck"]["quality"]}`}>
                            <Item item={props.inventory["neck"]} ></Item>
                            {props.inventory["neck"]["name"]!="default"&& props.inventory["neck"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["neck"] && ` (${props.inventory["neck"]["desc"]})`}
                        </span>
                        

                        <span class={`item shoulder ${props.inventory["shoulder"]["quality"]}`}>
                            <Item item={props.inventory["shoulder"]} ></Item>
                            {props.inventory["shoulder"]["name"]!="default"&& props.inventory["shoulder"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["shoulder"] && ` (${props.inventory["shoulder"]["desc"]})`}
                        </span>
                        

                        <span class={`item back ${props.inventory["back"]["quality"]}`}>
                            <Item item={props.inventory["back"]} ></Item>
                            {props.inventory["back"]["name"]!="default"&& props.inventory["back"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["back"] && ` (${props.inventory["back"]["desc"]})`}
                        </span>
                        

                        <span class={`item chest ${props.inventory["chest"]["quality"]}`}>
                            <Item item={props.inventory["chest"]} ></Item>
                            {props.inventory["chest"]["name"]!="default"&& props.inventory["chest"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["chest"] && ` (${props.inventory["chest"]["desc"]})`}
                        </span>
                        

                        <span class={`item wrist ${props.inventory["wrist"]["quality"]}`}>
                            <Item item={props.inventory["wrist"]} ></Item>
                            {props.inventory["wrist"]["name"]!="default"&& props.inventory["wrist"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["wrist"] && ` (${props.inventory["wrist"]["desc"]})`}
                        </span>
                        

                        <span class={`item hands ${props.inventory["hands"]["quality"]}`}>
                            <Item item={props.inventory["hands"]} ></Item>
                            {props.inventory["hands"]["name"]!="default"&& props.inventory["hands"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["hands"] && ` (${props.inventory["hands"]["desc"]})`}
                        </span>
                    </div>

                    <div class="column right">
                    <span class={`item waist ${props.inventory["waist"]["quality"]}`}>
                            {props.inventory["waist"]["name"]!="default"&& props.inventory["waist"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["waist"] && ` (${props.inventory["waist"]["desc"]})`}
                            <Item item={props.inventory["waist"]} ></Item>
                        </span>
                        
                        <span class={`item legs ${props.inventory["legs"]["quality"]}`}>
                            {props.inventory["legs"]["name"]!="default"&& props.inventory["legs"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["legs"] && ` (${props.inventory["legs"]["desc"]})`}
                            <Item item={props.inventory["legs"]} ></Item>
                        </span>
                        

                        <span class={`item feet ${props.inventory["feet"]["quality"]}`}>
                            {props.inventory["feet"]["name"]!="default"&& props.inventory["feet"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["feet"] && ` (${props.inventory["feet"]["desc"]})`}
                            <Item item={props.inventory["feet"]} ></Item>
                        </span>
                        

                        <span class={`item ring_1 ${props.inventory["ring_1"]["quality"]}`}>
                            {props.inventory["ring_1"]["name"]!="default"&& props.inventory["ring_1"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["ring_1"] && ` (${props.inventory["ring_1"]["desc"]})`}
                            <Item item={props.inventory["ring_1"]} ></Item>
                        </span>
                        

                        <span class={`item ring_2 ${props.inventory["ring_2"]["quality"]}`}>
                            {props.inventory["ring_2"]["name"]!="default"&& props.inventory["ring_2"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["ring_2"] && ` (${props.inventory["ring_2"]["desc"]})`}
                            <Item item={props.inventory["ring_2"]} ></Item>
                        </span>
                        

                        <span class={`item trinket_1 ${props.inventory["trinket_1"]["quality"]}`}>
                            {props.inventory["trinket_1"]["name"]!="default"&& props.inventory["trinket_1"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["trinket_1"] && ` (${props.inventory["trinket_1"]["desc"]})`}
                            <Item item={props.inventory["trinket_1"]} ></Item>
                        </span>
                        

                        <span class={`item trinket_2 ${props.inventory["trinket_2"]["quality"]}`}>
                            {props.inventory["trinket_2"]["name"]!="default"&& props.inventory["trinket_2"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["trinket_2"] && ` (${props.inventory["trinket_2"]["desc"]})`}
                            <Item item={props.inventory["trinket_2"]} ></Item>
                        </span>
                    </div>
                </div>
                <div class="rows">
                    <div class="row bottom">
                        <span class={`item mainhand ${props.inventory["mainhand"]["quality"]}`}>
                            <Item item={props.inventory["mainhand"]} ></Item>
                            {props.inventory["mainhand"]["name"]!="default"&& props.inventory["mainhand"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["mainhand"] && ` (${props.inventory["mainhand"]["desc"]})`}
                        </span>
                        <span class={
                            `item offhand ${props.inventory["offhand"]["quality"]} ${
                                (props.inventory["offhand"]["id"] == props.inventory["mainhand"]["id"] &&
                                props.inventory["offhand"]["name"] != "default")?"two-hand":""
                            }`
                            }>  
                            <Item item={props.inventory["offhand"]} ></Item>
                            {props.inventory["offhand"]["name"]!="default"&& props.inventory["offhand"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["offhand"] && ` (${props.inventory["offhand"]["desc"]})`}
                        </span>
                        <span class={`item misc ${props.inventory["misc"]["quality"]}`}>
                            <Item item={props.inventory["misc"]} ></Item>
                            {props.inventory["misc"]["name"]!="default"&& props.inventory["misc"]["name"]}
                            <br></br>
                            {"desc" in props.inventory["offhand"] && ` (${props.inventory["offhand"]["desc"]})`}
                        </span>
                    </div>
                </div>
            </div>
        )
    } catch(error){
        console.log(error);
    }
    }   