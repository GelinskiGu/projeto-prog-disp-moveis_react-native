import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import MyVaccines from "../components/MyVaccines/MyVaccines";
import { MinhasVacinas_sty } from "../components/MinhasVacinas_sty";
import contas from "../data/Contas";

// TODO: Tirar os console log.

const MinhasVacinas = (props) => {
    const [dataVacinacao, setDataVacinacao] = useState('');
    const [vacina, setVacina] = useState('');
    const [dose, setDose] = useState('');
    const [proxVacinacao, setProxVacinacao] = useState('');
    const [myComponents, setMyComponents] = useState([]);

    const emailUsuarioLogado = props.route.params?.emailUsuarioLogado;

    const novaVacina = () => {
        props.navigation.navigate("NovaVacina", { emailUsuarioLogado: emailUsuarioLogado });
    }

    useEffect(() => {
        console.log("Usuario logado: " + emailUsuarioLogado);

        const components = [];
        if (contas[emailUsuarioLogado]) {
            for (const vacina in contas[emailUsuarioLogado].vacinas) {
                console.log(vacina);
                const objVacina = contas[emailUsuarioLogado].vacinas[vacina];
                const nomeVacinaObj = objVacina.nome;
                const dataObj = objVacina.dataVacinacao;
                const doseObj = objVacina.dose;
                const dataDoseObj = objVacina.proxVacinacao;
                const component = <MyVaccines
                    key={vacina}
                    nomeVacina={nomeVacinaObj}
                    dose={doseObj}
                    data={dataObj}
                    dataDose={dataDoseObj}
                />;
                components.push(component);
                console.log(nomeVacinaObj, doseObj, dataObj, dataDoseObj);
            }

            setMyComponents(components);
        }
    }, []);

    return (
        <KeyboardAvoidingView style={MinhasVacinas_sty.container.containerKeyboard}>
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                <View style={MinhasVacinas_sty.container.containerView}>
                    <View style={MinhasVacinas_sty.inputContainer}>
                        <Image source={require('../../assets/images/icon_search.png')} style={MinhasVacinas_sty.icon} />
                        <TextInput placeholder="PESQUISAR VACINA..." style={{ paddingVertical: 0, fontFamily: 'AveriaLibre-Regular' }}></TextInput>
                    </View>
                    <View style={MinhasVacinas_sty.container.containerMyVaccines}>
                        {myComponents}
                    </View>
                </View>

                <TouchableOpacity style={MinhasVacinas_sty.buttonContainer} onPress={novaVacina}>
                    <Text style={MinhasVacinas_sty.button.text}>Nova Vacina</Text>
                </TouchableOpacity>


            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default MinhasVacinas;