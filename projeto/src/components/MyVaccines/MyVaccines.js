import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { MyVaccines_sty } from "./MyVaccines_sty";

const MyVaccines = (props) => {

    return (
        <TouchableOpacity style={MyVaccines_sty.container.containerView} onPress={props.onPress}>
            <Text style={MyVaccines_sty.text.textNameVaccine}>{props.nomeVacina}</Text>
            <Text style={MyVaccines_sty.text.textDose}>{props.dose}</Text>
            <Text style={MyVaccines_sty.text.textDate}>{props.data}</Text>
            <Image source={require('../../../assets/images/image-comprovante.png')} style={{ width: '100%' }} resizeMode="contain" />
            <Text style={MyVaccines_sty.text.textDoseDate}>{props.dataDose}</Text>
        </TouchableOpacity>
    )
}

export default MyVaccines;