import React from 'react'
import "./Item.css"

export default function Item(props){
    const item = props.item.image;
    const path =`./images/${item}`;   
  return (
    <div class="item_container">
        <div class="image_container">
            <img class={`item_image ${props.item.quality}`} src={"/img?src="+item} alt="React Logo" />
            <div class={`item_tooltip ${props.item.spell_1!=0?"medium":"small"}`}>
                    <div class={`item_name ${props.item.quality}`}>{props.item.name}</div>
                    <div class="item_level">Item Level {props.item.item_level}</div>
                    {
                        props.item.binding != 0 &&
                        <div class="item_bond">
                        {
                            props.item.binding == 1?"Binds when picked up":
                            props.item.binding == 2?"Binds when equipped":null
                        }
                        </div>
                    }
                    <div class="inventory">
                        <div class="slot">{props.item.inventory_type}</div>
                        {
                            props.item.subclass!="miscellaneous" &&
                            <div class="type">{props.item.subclass}</div>
                        }
                    </div>
                    {
                        props.item.damage_min > 0 &&
                        <div class="weapon">
                            <div class="damage">
                                <div class="minmax">{props.item.damage_min}-{props.item.damage_max} Damage</div>
                                <div class="speed">Speed {props.item.speed}</div>
                            </div>
                            <div class="dps">{}</div>
                        </div>
                    }
                    {
                        props.item.armor > 0 &&
                        <div class="armor">{props.item.armor} armor</div>
                    }
                    {
                        props.item.subclass=="shield" &&
                        <div class="block">{props.item.block} Block</div>
                    }
                    <div class="stats">
                        {
                            props.item.stat_modifier_amount_0 != 0 &&
                            <div class="stat" id="stat_0">
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
                            <div class="stat" id="stat_1">
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
                            <div class="stat" id="stat_2">
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
                            <div class="stat" id="stat_3">
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
                            <div class="stat" id="stat_4">
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
                    <div class="resistances">
                        {
                            props.item.resistance_arcane != 0 &&
                            <div class="resistance" id="arcane">
                                {
                                    "+" + props.item.resistance_arcane + " Arcane Resistance"
                                }
                            </div>
                        }
                        {
                            props.item.resistance_fire != 0 &&
                            <div class="resistance" id="fire">
                                {
                                    "+" + props.item.resistance_fire + " Fire Resistance"
                                }
                            </div>
                        }
                        {
                            props.item.resistance_nature != 0 &&
                            <div class="resistance" id="nature">
                                {
                                    "+" + props.item.resistance_nature + " Nature Resistance"
                                }
                            </div>
                        }
                        {
                            props.item.resistance_frost != 0 &&
                            <div class="resistance" id="frost">
                                {
                                    "+" + props.item.resistance_frost + " Frost Resistance"
                                }
                            </div>
                        }
                        {
                            props.item.resistance_shadow != 0 &&
                            <div class="resistance" id="shadow">
                                {
                                    "+" + props.item.resistance_shadow + " Shadow Resistance"
                                }
                            </div>
                        }
                    </div>
                    {
                        props.item.durability > 0 &&
                        <div class="durability">Durability {props.item.durability}/{props.item.durability}</div>
                    }
                    {
                        props.item.required_level > 0 &&
                        <div class="req_level">Requires Level {props.item.required_level}</div>
                    }
                    {
                        props.item.spell_1 !=0 &&
                        <div class = "item_effect">
                            <div class="item_effect_type">{
                                props.item.effect_type_1=="on_equip"?"Equip: ":
                                props.item.effect_type_1=="on_use"?"Use: ":
                                props.item.effect_type_1=="on_proc"?"Chance on hit: ":null
                                }
                            </div>
                            <div class="item_spell_desc">
                                {props.item.spell_desc_1}
                            </div>
                        </div>
                    }
                    {
                        props.item.spell_2 !=0 &&
                        <div class = "item_effect">
                            <div class="item_effect_type">{
                                props.item.effect_type_2=="on_equip"?"Equip: ":
                                props.item.effect_type_2=="on_use"?"Use: ":
                                props.item.effect_type_2=="on_proc"?"Chance on hit: ":null
                                }
                            </div>
                            <div class="item_spell_desc">
                                {props.item.spell_desc_2}
                            </div>
                        </div>
                    }
                    {
                        props.item.spell_3 !=0 &&
                        <div class = "item_effect">
                            <div class="item_effect_type">{
                                props.item.effect_type_3=="on_equip"?"Equip: ":
                                props.item.effect_type_3=="on_use"?"Use: ":
                                props.item.effect_type_3=="on_proc"?"Chance on hit: ":null
                                }
                            </div>
                            <div class="item_spell_desc">
                                {props.item.spell_desc_3}
                            </div>
                        </div>
                    }
                    {
                        props.item.spell_4 !=0 &&
                        <div class = "item_effect">
                            <div class="item_effect_type">{
                                props.item.effect_type_4=="on_equip"?"Equip: ":
                                props.item.effect_type_4=="on_use"?"Use: ":
                                props.item.effect_type_4=="on_proc"?"Chance on hit: ":null
                                }
                            </div>
                            <div class="item_spell_desc">
                                {props.item.spell_desc_4}
                            </div>
                        </div>
                    }
                    {
                        props.item.set_id !=0 &&
                        <div class = "item_set">
                            <div class = "set_name_items">{props.item.set_name}</div>
                                {
                                props.item.set_item_id_0 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_0}
                                </div>
                                }
                                {
                                props.item.set_item_id_1 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_1}
                                </div>
                                }
                                {
                                props.item.set_item_id_2 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_2}
                                </div>
                                }
                                {
                                props.item.set_item_id_3 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_3}
                                </div>
                                }
                                {
                                props.item.set_item_id_4 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_4}
                                </div>
                                }
                                {
                                props.item.set_item_id_5 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_5}
                                </div>
                                }
                                {
                                props.item.set_item_id_6 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_6}
                                </div>
                                }
                                {
                                props.item.set_item_id_7 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_7}
                                </div>
                                }
                                {
                                props.item.set_item_id_8 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_8}
                                </div>
                                }
                                {
                                props.item.set_item_id_9 != 0 &&
                                <div class="set_item">
                                    {props.item.set_item_name_9}
                                </div>
                                }
                            <div class="set_effects">
                                {
                                    props.item.threshold_0 !=0 &&
                                    <div class="set_effect">{`(${props.item.threshold_0}) Set: ${props.item.set_spell_desc_0}`}</div>
                                }
                                                                {
                                    props.item.threshold_1 !=0 &&
                                    <div class="set_effect">{`(${props.item.threshold_1}) Set: ${props.item.set_spell_desc_1}`}</div>
                                }
                                                                {
                                    props.item.threshold_2 !=0 &&
                                    <div class="set_effect">{`(${props.item.threshold_2}) Set: ${props.item.set_spell_desc_2}`}</div>
                                }
                                                                {
                                    props.item.threshold_3 !=0 &&
                                    <div class="set_effect">{`(${props.item.threshold_3}) Set: ${props.item.set_spell_desc_3}`}</div>
                                }
                                                                {
                                    props.item.threshold_4 !=0 &&
                                    <div class="set_effect">{`(${props.item.threshold_4}) Set: ${props.item.set_spell_desc_4}`}</div>
                                }
                                                                {
                                    props.item.threshold_5 !=0 &&
                                    <div class="set_effect">{`(${props.item.threshold_5}) Set: ${props.item.set_spell_desc_5}`}</div>
                                }
                            </div>
                        </div>
                    }
            </div>
        </div>
    </div>
  )
}
