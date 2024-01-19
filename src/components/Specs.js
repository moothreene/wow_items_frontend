export default function Specs(props){
    switch(props.class_name){
        case "rogue":
            return(
                <select name="spec" required>
                    <option value="" selected>-select spec-</option>
                    <option value="assassination">Assassination</option>
                    <option value="subtelty">Subtelty</option>
                    <option value="combat">Combat</option>
                    <option value="tank">Tank</option>
                </select>
            )
        case "paladin":
            return(
                <select name="spec" required>
                    <option value="" selected>-select spec-</option>
                    <option value="holy">Holy</option>
                    <option value="protection">Protection</option>
                    <option value="retribution">Retribution</option>
                </select>
            )
    }
}