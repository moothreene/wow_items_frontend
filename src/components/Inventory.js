import Item from "./Item";
import "./Inventory.css"

export default function Inventory(props){
    console.log(props.inventory);
    try{
    return(
        <div class="column right">
            <span class="item head">
                <Item item={props.inventory["head"]}></Item>
                {props.inventory["head"]["name"]}
            </span>
            
            <span class="item neck">
                <Item item={props.inventory["neck"]}></Item>
                {props.inventory["neck"]["name"]}
            </span>
            

            <span class="item shoulder">
                <Item item={props.inventory["shoulder"]}></Item>
                {props.inventory["shoulder"]["name"]}
            </span>
            

            <span class="item back">
                <Item item={props.inventory["back"]}></Item>
                {props.inventory["back"]["name"]}
            </span>
            

            <span class="item chest">
                <Item item={props.inventory["chest"]}></Item>
                {props.inventory["chest"]["name"]}
            </span>
            

            <span class="item wrist">
                <Item item={props.inventory["wrist"]}></Item>
                {props.inventory["wrist"]["name"]}
            </span>
            

            <span class="item hands">
                <Item item={props.inventory["hands"]}></Item>
                {props.inventory["hands"]["name"]}
            </span>

        </div>
    )
    } catch(error){
        console.log(error)
    }
    }   