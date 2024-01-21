import React, { useState, useEffect } from 'react';
import Item from "./Item";
import "./Inventory.css";

export default function Inventory(props){

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.intersectionRatio < 1){
                entry.target.classList.add("is_leaving");
            }
        })
    },{ threshold: [0, 1] })

    useEffect(() => {
            let tooltips = document.querySelectorAll('.item_tooltip');
            console.log(tooltips);
            tooltips.forEach(tooltip => observer.observe(tooltip));
      });

    try{
        return(
            <div class="inventory">
                <div class="column left">
                    <span class="item head">
                        <Item item={props.inventory["head"]} loading={props.loading}></Item>
                        {props.inventory["head"]["name"]!="default"&& props.inventory["head"]["name"]}
                    </span>
                    
                    <span class="item neck">
                        <Item item={props.inventory["neck"]} loading={props.loading}></Item>
                        {props.inventory["neck"]["name"]!="default"&& props.inventory["neck"]["name"]}
                    </span>
                    

                    <span class="item shoulder">
                        <Item item={props.inventory["shoulder"]} loading={props.loading}></Item>
                        {props.inventory["shoulder"]["name"]!="default"&& props.inventory["shoulder"]["name"]}
                    </span>
                    

                    <span class="item back">
                        <Item item={props.inventory["back"]} loading={props.loading}></Item>
                        {props.inventory["back"]["name"]!="default"&& props.inventory["back"]["name"]}
                    </span>
                    

                    <span class="item chest">
                        <Item item={props.inventory["chest"]} loading={props.loading}></Item>
                        {props.inventory["chest"]["name"]!="default"&& props.inventory["chest"]["name"]}
                    </span>
                    

                    <span class="item wrist">
                        <Item item={props.inventory["wrist"]} loading={props.loading}></Item>
                        {props.inventory["wrist"]["name"]!="default"&& props.inventory["wrist"]["name"]}
                    </span>
                    

                    <span class="item hands">
                        <Item item={props.inventory["hands"]} loading={props.loading}></Item>
                        {props.inventory["hands"]["name"]!="default"&& props.inventory["hands"]["name"]}
                    </span>
                </div>

                <div class="column right">
                    <span class="item waist">
                        <Item item={props.inventory["waist"]} loading={props.loading}></Item>
                        {props.inventory["waist"]["name"]!="default"&& props.inventory["waist"]["name"]}
                    </span>
                    
                    <span class="item legs">
                        <Item item={props.inventory["legs"]} loading={props.loading}></Item>
                        {props.inventory["legs"]["name"]!="default"&& props.inventory["legs"]["name"]}
                    </span>
                    

                    <span class="item feet">
                        <Item item={props.inventory["feet"]} loading={props.loading}></Item>
                        {props.inventory["feet"]["name"]!="default"&& props.inventory["feet"]["name"]}
                    </span>
                    

                    <span class="item ring_1">
                        <Item item={props.inventory["ring_1"]} loading={props.loading}></Item>
                        {props.inventory["ring_2"]["name"]!="default"&& props.inventory["ring_2"]["name"]}
                    </span>
                    

                    <span class="item ring_2">
                        <Item item={props.inventory["ring_2"]} loading={props.loading}></Item>
                        {props.inventory["ring_2"]["name"]!="default"&& props.inventory["ring_2"]["name"]}
                    </span>
                    

                    <span class="item trinket_1">
                        <Item item={props.inventory["trinket_1"]} loading={props.loading}></Item>
                        {props.inventory["trinket_1"]["name"]!="default"&& props.inventory["trinket_1"]["name"]}
                    </span>
                    

                    <span class="item trinket_2">
                        <Item item={props.inventory["trinket_2"]} loading={props.loading}></Item>
                        {props.inventory["trinket_2"]["name"]!="default"&& props.inventory["trinket_2"]["name"]}
                    </span>
                </div>

            </div>
        )
    } catch(error){
        console.log(error);
    }
    }   