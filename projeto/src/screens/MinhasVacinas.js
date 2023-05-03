import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import MyVaccines from "../components/MyVaccines/MyVaccines";
import { MinhasVacinas_sty } from "../components/MinhasVacinas_sty";
import contas from "../data/Contas";

// TODO: Arrumar botão de Nova Vacina quando adicionado novos cards.
// TODO: Input de search está bugado.

const MinhasVacinas = (props) => {
    const [dataVacinacao, setDataVacinacao] = useState('');
    const [vacina, setVacina] = useState('');
    const [dose, setDose] = useState('');
    const [proxVacinacao, setProxVacinacao] = useState('');

    const myVaccines = () => {
        props.navigation.navigate("EditarVacina")
    }

    return (
        <KeyboardAvoidingView style={MinhasVacinas_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={MinhasVacinas_sty.container.containerView}>
                    <View style={MinhasVacinas_sty.inputContainer}>
                        <Image source={require('../../assets/images/icon_search.png')} style={{ marginLeft: 10, width: 16, height: 16 }} />
                        <TextInput placeholder="PESQUISAR VACINA..." style={{ textAlign: "center", paddingVertical: 1, fontFamily: 'AveriaLibre-Regular' }}></TextInput>
                    </View>
                    <View style={MinhasVacinas_sty.container.containerMyVaccines}>
                        <MyVaccines nomeVacina="BCG" dose="Dose única" data="11/06/2022" dataDose="Não há próxima dose" onPress={myVaccines} />
                        <MyVaccines nomeVacina="Febre Amarela" dose="1a. dose" data="11/06/2022" dataDose="Próxima dose em: 11/10/2023" />
                        <MyVaccines nomeVacina="Hepatite B" dose="1a. dose" data="11/06/2022" dataDose="Próxima dose em: 11/10/2023" />
                        <MyVaccines nomeVacina="Poliomelite" dose="1a. dose" data="11/06/2022" dataDose="Próxima dose em: 11/10/2023" />
                    </View>
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={MinhasVacinas_sty.button.container}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate("NovaVacina");
                            console.log(contas)
                        }}><Text style={MinhasVacinas_sty.button.text}>Nova Vacina</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default MinhasVacinas;