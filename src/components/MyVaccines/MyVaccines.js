import { Text, TouchableOpacity, Image } from "react-native";

import { MyVaccines_sty } from "./MyVaccines_sty";

const MyVaccines = (props) => {
    return (
        <TouchableOpacity style={MyVaccines_sty.container.containerView} onPress={props.item.onPress}>
            <Text style={MyVaccines_sty.text.textNameVaccine}>{props.item.nomeVacina}</Text>
            <Text style={MyVaccines_sty.text.textDose}>{props.item.dose}</Text>
            <Text style={MyVaccines_sty.text.textDate}>{props.item.data}</Text>
            <Image source={require('../../../assets/images/image-comprovante.png')} style={MyVaccines_sty.image} />
            <Text style={MyVaccines_sty.text.textDoseDate}>{props.item.dataDose}</Text>
        </TouchableOpacity>
    )
}

export default MyVaccines;