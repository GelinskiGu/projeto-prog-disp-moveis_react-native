import { Text, TouchableOpacity, Image } from "react-native";

import { MyVaccines_sty } from "./MyVaccines_sty";


// TODO: Colocar onPress
const MyVaccines = (props) => {
    console.log(props);
    return (
        <TouchableOpacity style={MyVaccines_sty.container.containerView} onPress={{}}>
            <Text style={MyVaccines_sty.text.textNameVaccine}>{props.nome}</Text>
            <Text style={MyVaccines_sty.text.textDose}>{props.dose}</Text>
            <Text style={MyVaccines_sty.text.textDate}>{props.dataVacinacao}</Text>
            <Image source={require('../../../assets/images/image-comprovante.png')} style={MyVaccines_sty.image} />
            <Text style={MyVaccines_sty.text.textDoseDate}>
                {props.proxVacinacao !== "" ? `Próxima dose em: ${props.proxVacinacao}` : "Não há próxima dose."}
            </Text>
        </TouchableOpacity>
    )
}

export default MyVaccines;