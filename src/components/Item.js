import React from 'react'
import "./Item.css"
import itemLocalization from "../ItemLocalisation.json";
import classId from "../data/Class_id.json";

export default function Item(props){
        const item = props.item.image;
        const speed = props.item.speed!=undefined?+props.item.speed.replace(",","."):0.0;
        const quality_modifier = props.item.quality_modifier!=undefined?+props.item.quality_modifier.replace(",","."):0.0;
        function damage_quality(){
            const damage_min = props.item.damage_min!=undefined?props.item.damage_min:0;
            const damage_max = props.item.damage_max!=undefined?props.item.damage_max:0;
            let dps = (damage_max+damage_min)/(2*speed);
            let dps_updated = dps+quality_modifier;
            let damage_min_updated = ((dps_updated*2*speed)-(damage_max-damage_min))/2;
            let damage_max_updated = (dps_updated*2*speed)-damage_min_updated;
            return({
                "min":Math.round(damage_min_updated),
                "max":Math.round(damage_max_updated),
                "dps":dps_updated.toFixed(2)
            })
        }

        function size(){
            let spell_length = 0;
            if (props.item.spell_desc_1 !== undefined){
                spell_length = props.item.spell_desc_1.length;
            }
            if(props.item.set_id !== 0){
                return "large";
            }
            if(spell_length === 0){
                return "small";
            }
            if(spell_length < 25 ){
                return "medium";
            }
            return "large";
        }
        return (
            <>
            <img src={props.item.image_file}></img>
            <div className="item_container">
                <div className={`image_container ${props.item.quality}`}>
                    <div className="shadow"></div>
                    <img className={`item_image ${props.item.quality}`} src={`https://wow-item-backend-752ca682c8fc.herokuapp.com/img?src=${props.item.image}`/*require(`../images/${item}`)*/} alt="img" />
                    { props.item.name!="default" &&
                    <div className={`item_tooltip ${size()} ${props.orientation}`}>
                            <div className={`item_name ${props.item.quality}`}>{props.item.name}</div>
                            <div className="item_level">Item Level {props.item.item_level}</div>
                            {
                                props.item.binding != 0 &&
                                <div className="item_bond">
                                {
                                    props.item.binding == 1?"Binds when picked up":
                                    props.item.binding == 2?"Binds when equipped":null
                                }
                                </div>
                            }
                            <div className="inventory_info">
                                <div className="slot">{itemLocalization[props.item.inventory_type]}</div>
                                    <div className="type">{itemLocalization[props.item.subclass]}</div>
                            </div>
                            {
                                props.item.damage_min > 0 &&
                                <div className="weapon">
                                    <div className="damage">
                                        <div className="minmax">{damage_quality()["min"]} - {damage_quality()["max"]} Damage</div>
                                        <div className="speed">Speed {speed.toFixed(2)}</div>
                                    </div>
                                    <div className="dps">{`(${damage_quality()["dps"]} damage per second)`}</div>
                                </div>
                            }
                            {
                                props.item.armor > 0 &&
                                <div className={`armor${quality_modifier!=0?" quality":""}`}>{props.item.armor + quality_modifier} armor</div>
                            }
                            {
                                props.item.subclass=="shield" &&
                                <div className="block">{props.item.block} Block</div>
                            }
                            {   props.item.has_random_enchantments != 0 &&
                                <div className="random_enchantment">{`<Random Enchantment>`}</div>
                            }
                            <div className="stats">
                                {
                                    props.item.stat_modifier_amount_0 != 0 &&
                                    <div className="stat" id="stat_0">
                                        {
                                        (props.item.stat_modifier_amount_0<0?"":"+")+props.item.stat_modifier_amount_0 + " "+
                                        (props.item.stat_modifier_stat_0 == 0?"Mana":
                                        props.item.stat_modifier_stat_0 == 1?"Health":
                                        props.item.stat_modifier_stat_0 == 3?"Agility":
                                        props.item.stat_modifier_stat_0 == 4?"Strength":
                                        props.item.stat_modifier_stat_0 == 5?"Intellect":
                                        props.item.stat_modifier_stat_0 == 6?"Spirit":
                                        props.item.stat_modifier_stat_0 == 7?"Stamina":null)
                                        }
                                    </div>
                                }
                                                {
                                    props.item.stat_modifier_amount_1 != 0 &&
                                    <div className="stat" id="stat_1">
                                        {
                                        (props.item.stat_modifier_amount_1<0?"":"+")+props.item.stat_modifier_amount_1 + " "+
                                        (props.item.stat_modifier_stat_1 == 0?"Mana":
                                        props.item.stat_modifier_stat_1 == 1?"Health":
                                        props.item.stat_modifier_stat_1 == 3?"Agility":
                                        props.item.stat_modifier_stat_1 == 4?"Strength":
                                        props.item.stat_modifier_stat_1 == 5?"Intellect":
                                        props.item.stat_modifier_stat_1 == 6?"Spirit":
                                        props.item.stat_modifier_stat_1 == 7?"Stamina":null)
                                        }
                                    </div>
                                }
                                                {
                                    props.item.stat_modifier_amount_2 != 0 &&
                                    <div className="stat" id="stat_2">
                                        {
                                        (props.item.stat_modifier_amount_2<0?"":"+")+props.item.stat_modifier_amount_2 + " "+
                                        (props.item.stat_modifier_stat_2 == 0?"Mana":
                                        props.item.stat_modifier_stat_2 == 1?"Health":
                                        props.item.stat_modifier_stat_2 == 3?"Agility":
                                        props.item.stat_modifier_stat_2 == 4?"Strength":
                                        props.item.stat_modifier_stat_2 == 5?"Intellect":
                                        props.item.stat_modifier_stat_2 == 6?"Spirit":
                                        props.item.stat_modifier_stat_2 == 7?"Stamina":null)
                                        }
                                    </div>
                                }
                                {
                                    props.item.stat_modifier_amount_3 != 0 &&
                                    <div className="stat" id="stat_3">
                                        {
                                        (props.item.stat_modifier_amount_3<0?"":"+")+props.item.stat_modifier_amount_3 + " "+
                                        (props.item.stat_modifier_stat_3 == 0?"Mana":
                                        props.item.stat_modifier_stat_3 == 1?"Health":
                                        props.item.stat_modifier_stat_3 == 3?"Agility":
                                        props.item.stat_modifier_stat_3 == 4?"Strength":
                                        props.item.stat_modifier_stat_3 == 5?"Intellect":
                                        props.item.stat_modifier_stat_3 == 6?"Spirit":
                                        props.item.stat_modifier_stat_3 == 7?"Stamina":null)
                                        }
                                    </div>
                                }
                                {
                                    props.item.stat_modifier_amount_4 != 0 &&
                                    <div className="stat" id="stat_4">
                                        {
                                        (props.item.stat_modifier_amount_4<0?"":"+")+props.item.stat_modifier_amount_4 + " "+
                                        (props.item.stat_modifier_stat_4 == 0?"Mana":
                                        props.item.stat_modifier_stat_4 == 1?"Health":
                                        props.item.stat_modifier_stat_4 == 3?"Agility":
                                        props.item.stat_modifier_stat_4 == 4?"Strength":
                                        props.item.stat_modifier_stat_4 == 5?"Intellect":
                                        props.item.stat_modifier_stat_4 == 6?"Spirit":
                                        props.item.stat_modifier_stat_4 == 7?"Stamina":null)
                                        }
                                    </div>
                                }
                            </div>
                            <div className="resistances">
                                {
                                    props.item.resistance_arcane != 0 &&
                                    <div className="resistance" id="arcane">
                                        {
                                            "+" + props.item.resistance_arcane + " Arcane Resistance"
                                        }
                                    </div>
                                }
                                {
                                    props.item.resistance_fire != 0 &&
                                    <div className="resistance" id="fire">
                                        {
                                            "+" + props.item.resistance_fire + " Fire Resistance"
                                        }
                                    </div>
                                }
                                {
                                    props.item.resistance_nature != 0 &&
                                    <div className="resistance" id="nature">
                                        {
                                            "+" + props.item.resistance_nature + " Nature Resistance"
                                        }
                                    </div>
                                }
                                {
                                    props.item.resistance_frost != 0 &&
                                    <div className="resistance" id="frost">
                                        {
                                            "+" + props.item.resistance_frost + " Frost Resistance"
                                        }
                                    </div>
                                }
                                {
                                    props.item.resistance_shadow != 0 &&
                                    <div className="resistance" id="shadow">
                                        {
                                            "+" + props.item.resistance_shadow + " Shadow Resistance"
                                        }
                                    </div>
                                }
                            </div>
                            {
                                props.item.durability > 0 &&
                                <div className="durability">Durability {props.item.durability}/{props.item.durability}</div>
                            }
                            {
                                props.item.class_available > 0 &&
                                <div className="classes_available">{"Classes: "}
                                    {
                                        props.item.class_available.toString().split("").map((class_id,i,arr)=>{
                                            return(
                                                <span key = {i} className={`class_available ${classId[class_id]}`}>
                                                    {classId[class_id].charAt(0).toUpperCase() + classId[class_id].slice(1)}
                                                    {arr.length - 1 != i &&
                                                    <span className="class_comma">, </span>
                                                    }
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            }
                            {
                                props.item.required_level > 0 &&
                                <div className="req_level">Requires Level {props.item.required_level}</div>
                            }
                            {
                                props.item.spell_1 !=0 &&
                                <div className = "item_effect">
                                    <div className="item_effect_type">{
                                        props.item.effect_type_1=="on_equip"?"Equip: ":
                                        props.item.effect_type_1=="on_use"?"Use: ":
                                        props.item.effect_type_1=="on_proc"?"Chance on hit: ":null
                                        }
                                    </div>
                                    <div className="item_spell_desc">
                                        {props.item.spell_desc_1}
                                    </div>
                                </div>
                            }
                            {
                                props.item.spell_2 !=0 &&
                                <div className = "item_effect">
                                    <div className="item_effect_type">{
                                        props.item.effect_type_2=="on_equip"?"Equip: ":
                                        props.item.effect_type_2=="on_use"?"Use: ":
                                        props.item.effect_type_2=="on_proc"?"Chance on hit: ":null
                                        }
                                    </div>
                                    <div className="item_spell_desc">
                                        {props.item.spell_desc_2}
                                    </div>
                                </div>
                            }
                            {
                                props.item.spell_3 !=0 &&
                                <div className = "item_effect">
                                    <div className="item_effect_type">{
                                        props.item.effect_type_3=="on_equip"?"Equip: ":
                                        props.item.effect_type_3=="on_use"?"Use: ":
                                        props.item.effect_type_3=="on_proc"?"Chance on hit: ":null
                                        }
                                    </div>
                                    <div className="item_spell_desc">
                                        {props.item.spell_desc_3}
                                    </div>
                                </div>
                            }
                            {
                                props.item.spell_4 !=0 &&
                                <div className = "item_effect">
                                    <div className="item_effect_type">{
                                        props.item.effect_type_4=="on_equip"?"Equip: ":
                                        props.item.effect_type_4=="on_use"?"Use: ":
                                        props.item.effect_type_4=="on_proc"?"Chance on hit: ":null
                                        }
                                    </div>
                                    <div className="item_spell_desc">
                                        {props.item.spell_desc_4}
                                    </div>
                                </div>
                            }
                            {
                                props.item.set_id !=0 &&
                                <div className = "item_set">
                                    <div className = "set_name_items">{`${props.item.set_name} (0/${props.item.set_item_count})`}</div>
                                        {
                                        props.item.set_item_id_0 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_0}
                                        </div>
                                        }
                                        {
                                        props.item.set_item_id_1 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_1}
                                        </div>
                                        }
                                        {
                                        props.item.set_item_id_2 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_2}
                                        </div>
                                        }
                                        {
                                        props.item.set_item_id_3 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_3}
                                        </div>
                                        }
                                        {
                                        props.item.set_item_id_4 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_4}
                                        </div>
                                        }
                                        {
                                        props.item.set_item_id_5 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_5}
                                        </div>
                                        }
                                        {
                                        props.item.set_item_id_6 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_6}
                                        </div>
                                        }
                                        {
                                        props.item.set_item_id_7 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_7}
                                        </div>
                                        }
                                        {
                                        props.item.set_item_id_8 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_8}
                                        </div>
                                        }
                                        {
                                        props.item.set_item_id_9 != 0 &&
                                        <div className="set_item">
                                            {props.item.set_item_name_9}
                                        </div>
                                        }
                                    <div className="set_effects">
                                        {
                                            props.item.threshold_0 !=0 &&
                                            <div className="set_effect">{`(${props.item.threshold_0}) Set: ${props.item.set_spell_desc_0}`}</div>
                                        }
                                                                        {
                                            props.item.threshold_1 !=0 &&
                                            <div className="set_effect">{`(${props.item.threshold_1}) Set: ${props.item.set_spell_desc_1}`}</div>
                                        }
                                                                        {
                                            props.item.threshold_2 !=0 &&
                                            <div className="set_effect">{`(${props.item.threshold_2}) Set: ${props.item.set_spell_desc_2}`}</div>
                                        }
                                                                        {
                                            props.item.threshold_3 !=0 &&
                                            <div className="set_effect">{`(${props.item.threshold_3}) Set: ${props.item.set_spell_desc_3}`}</div>
                                        }
                                                                        {
                                            props.item.threshold_4 !=0 &&
                                            <div className="set_effect">{`(${props.item.threshold_4}) Set: ${props.item.set_spell_desc_4}`}</div>
                                        }
                                                                        {
                                            props.item.threshold_5 !=0 &&
                                            <div className="set_effect">{`(${props.item.threshold_5}) Set: ${props.item.set_spell_desc_5}`}</div>
                                        }
                                    </div>
                                </div>
                            }
                    </div>
                    }
                </div>
            </div>
            </>
        )
}
