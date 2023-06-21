import { Text, TouchableOpacity } from "react-native";

import { MyCard_sty } from "./MyCard_sty";

import { useDispatch } from "react-redux";
import { reducerSetVaccineData } from "../../../redux/vaccineDataSlice";

const MyCard = (props) => {
    const { id, nomeVacina, vaccineDate, data, dose } = props;

    console.log(JSON.stringify(props));

    const dispatch = useDispatch();

    goToEditVaccine = () => {
        dispatch(reducerSetVaccineData({
            vaccineId: id,
            name: nomeVacina,
            vaccineDate: vaccineDate,
            vaccineNextDate: data,
            dose: dose,
        }));
        console.log("Chegou 1");
        props.navigation.navigate("EditarVacina");
        console.log("Chegou 2");
    }

    return (
        <TouchableOpacity style={MyCard_sty.container.containerView} onPress={goToEditVaccine}>
            <Text style={MyCard_sty.text.textName}>{props.nomeVacina}</Text>
            <Text style={MyCard_sty.text.textDate}>{props.data}</Text>
        </TouchableOpacity>
    )
}

export default MyCard;