import { Text, TouchableOpacity, Image } from "react-native";

import { MyVaccines_sty } from "./MyVaccines_sty";

import { useDispatch } from 'react-redux'
import { reducerSetVaccineData } from "../../../redux/vaccineDataSlice";

const MyVaccines = (props) => {

    const vaccineId = props.vaccineId;
    const name = props.name;
    const vaccineDate = props.vaccineDate;
    const nextVaccineDate = props.nextVaccineDate;
    const dose = props.dose;

    console.log(`Dados: ${vaccineId}, ${name}, ${vaccineDate}, ${nextVaccineDate}, ${dose}`);


    const dispatch = useDispatch()

    goToEditVaccine = () => {
        dispatch(reducerSetVaccineData({
            vaccineId: vaccineId,
            name: name,
            vaccineDate: vaccineDate,
            vaccineNextDate: nextVaccineDate,
            dose: dose,
        }));
        props.navigation.navigate("EditarVacina");
    }

    return (
        <TouchableOpacity style={MyVaccines_sty.container.containerView} onPress={goToEditVaccine}>
            <Text style={MyVaccines_sty.text.textNameVaccine}>{name}</Text>
            <Text style={MyVaccines_sty.text.textDose}>{dose}</Text>
            <Text style={MyVaccines_sty.text.textDate}>{vaccineDate}</Text>
            <Image source={require('../../../assets/images/image-comprovante.png')} style={MyVaccines_sty.image} />
            <Text style={MyVaccines_sty.text.textDoseDate}>
                {nextVaccineDate !== "" ? `Próxima dose em: ${nextVaccineDate}` : "Não há próxima dose"}
            </Text>
        </TouchableOpacity>
    )
}

export default MyVaccines;