import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { ProximasVacinas_sty } from "../components/ProximasVacinas_sty";
import MyCard from "../components/MyCard/MyCard";


// TODO: Arrumar botão de Nova Vacina quando adicionado novos cards.

const ProximasVacinas = () => {
    const [dataVacinacao, setDataVacinacao] = useState('');
    const [vacina, setVacina] = useState('');
    const [dose, setDose] = useState('');
    const [proxVacinacao, setProxVacinacao] = useState('');


    return (
        <KeyboardAvoidingView style={ProximasVacinas_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={ProximasVacinas_sty.container.containerView}>
                    <MyCard nomeVacina="BCG" data="20/09/2022" />
                    <MyCard nomeVacina="DTpa" data="20/09/2024" />
                    <MyCard nomeVacina="Sarampo" data="20/09/2026" />
                    <View style={ProximasVacinas_sty.button.container}>
                        <TouchableOpacity><Text style={ProximasVacinas_sty.button.text}>Nova Vacina</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default ProximasVacinas;