import { Text, TouchableOpacity } from "react-native";

import { MyCard_sty } from "./MyCard_sty";

const MyCard = (props) => {
    return (
        <TouchableOpacity style={MyCard_sty.container.containerView} onPress={props.onPress}>
            <Text style={MyCard_sty.text.textName}>{props.nomeVacina}</Text>
            <Text style={MyCard_sty.text.textDate}>{props.data}</Text>
        </TouchableOpacity>
    )
}

export default MyCard;